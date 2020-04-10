import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class TabSelectorService{
    private _module: number ;
    currentModule: Subject<number> = new Subject();

    get module():number {
        return this._module;
    }

    set module(value) {
        this._module = value;
        this.currentModule.next(value);
    }
}
