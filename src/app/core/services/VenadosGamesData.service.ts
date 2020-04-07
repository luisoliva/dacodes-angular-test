import {HTTPHEADER, IDataReaderService} from './Interfaces/IDataReader.service';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class VenadosGamesDataService implements IDataReaderService{
    private apiBaseUrl: string = ' https://venados.dacodes.mx/api/games';

    constructor(private httpClient: HttpClient) {}

    getAll(): Observable<any> {
        return this.httpClient.get(this.apiBaseUrl, HTTPHEADER);
    }
}
