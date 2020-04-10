import {Injectable} from '@angular/core';
import {IDataReaderService} from './Interfaces/IDataReader.service';
import {TeamModel} from '../models/Team.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class VenadosPlayersService implements IDataReaderService<TeamModel>{
    private baseApiUrl: string = '/api/players';

    constructor(private httpClient: HttpClient) {
    }

    getAll(): Observable<any> {
        return this.httpClient.get(this.baseApiUrl);
    }

    parseJson(object: any, filter?: string): TeamModel {
        return object.data.team;
    }

}
