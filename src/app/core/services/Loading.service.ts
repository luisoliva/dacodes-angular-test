import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class LoadingService{
    private _loading: boolean = false;
    loadingStatus: Subject<boolean> = new Subject();

    get loading():boolean {
        return this._loading;
    }

    set loading(value) {
        this._loading = value;
        this.loadingStatus.next(value);
    }

    startLoading() {
        this.loading = true;
    }

    stopLoading() {
        this.loading = false;
    }
}
