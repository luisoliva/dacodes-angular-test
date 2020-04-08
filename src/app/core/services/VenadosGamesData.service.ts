import {HTTPHEADER, IDataReaderService} from './Interfaces/IDataReader.service';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class VenadosGamesDataService implements IDataReaderService{
    private apiBaseUrl: string = 'https://venados.dacodes.mx/api/games';

    constructor(private httpClient: HttpClient) {}

    getAll(): any {
        debugger
        return this.httpClient.get(this.apiBaseUrl).toPromise().then(res=>{
            debugger
        })
            .catch(e=>{
                debugger
            });

    }
}
