import {Observable} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';

export const HTTPHEADER = {
    headers: new HttpHeaders({
        'Accept': 'application/json'
    })
};
export interface IDataReaderService<T> {
    getAll(): Observable<any>;
    parseModel(object: any): T;
}
