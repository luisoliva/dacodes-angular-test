import {IDataReaderService} from './Interfaces/IDataReader.service';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Games} from '../models/Games';
import {formatDate} from '@angular/common';

@Injectable()
export class VenadosGamesDataService implements IDataReaderService<Array<Games>>{
    private apiBaseUrl: string = '/api/games';

    constructor(private httpClient: HttpClient) {}

     getAll(): Observable<any> {
        return this.httpClient.get(this.apiBaseUrl)
    }

    parseJson(object: any, filter:string): Array<Games> {
        let data: Games = object.data;
        return this.getByMonth(this.getByLeague(filter, data));
    }

    getByLeague(league: string, games: Games): Games{
        let data: Games = new Games();
        games.games.forEach(function(element){
            if (element.league == league){
                data.games.push(element)
            }
        });
        return data;
    }

    getByMonth(games: Games): Array<Games>{
        let dataByMonth: Array<Games> = new Array<Games>();
        let monthsInGames = [];
        games.games.forEach(function(element) {
            let date = VenadosGamesDataService.getMonthInDate(formatDate(element.datetime, 'shortDate','en-US'));
            let index = monthsInGames.indexOf(date);
            if (index === -1){
                monthsInGames.push(date);
                let newMonth: Games =  new Games();
                newMonth.games.push(element);
                dataByMonth.push(newMonth);
            }else{
                dataByMonth[index].games.push(element);
            }
        });
        return dataByMonth;
    }

    static getMonthInDate(date: string): string{
        let splitData = date.split('/');
        return splitData[0];
    }
}
