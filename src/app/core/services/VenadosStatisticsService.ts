import {Injectable} from '@angular/core';
import {IDataReaderService} from './Interfaces/IDataReader.service';
import {StatisticsModel} from '../models/Statistics.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class VenadosStatisticsService implements IDataReaderService<Array<StatisticsModel>>{
    private baseApiUrl = 'api/statistics';

    constructor(private httpClient: HttpClient) {}

    getAll(): Observable<any> {
        return this.httpClient.get(this.baseApiUrl);
    }

    parseJson(object: any, filter?: string): Array<StatisticsModel> {
        return object.data.statistics;
    }

}
