import {Observable} from 'rxjs';

export interface IDataReaderService<T> {
    getAll(): Observable<any>;
    parseJson(object: any, filter?: string): T;
}
