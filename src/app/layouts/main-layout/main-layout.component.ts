import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {LoadingService} from '../../core/services/Loading.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit, OnDestroy {
    isCollapsed: boolean = false;
    isContentLoading: boolean = false;
    loadingSubscription : Subscription;

    constructor(private loadingSingletonService: LoadingService) { }

    ngOnInit(): void {
        this.loadingSubscription = this.loadingSingletonService.loadingStatus.subscribe((value) =>{
            this.isContentLoading = value;
        })
    }

    ngOnDestroy(): void {
        this.loadingSubscription.unsubscribe();
    }
}
