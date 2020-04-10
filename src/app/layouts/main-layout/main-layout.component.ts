import {AfterViewInit, Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {LoadingService} from '../../core/services/Loading.service';
import {Router} from '@angular/router';
import {TabSelectorService} from '../../core/services/TabSelector.service';
import {NzNotificationService} from 'ng-zorro-antd';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit, OnDestroy {
    isCollapsed: boolean = false;
    isContentLoading: boolean = false;
    loadingSubscription : Subscription;
    minWidth: number = window.innerWidth;
    activeModule: number;
    tabSelectorSubscription;

    constructor(private loadingSingletonService: LoadingService,
                private tabSelectorService: TabSelectorService,
                private notificationService: NzNotificationService) { }

    @HostListener('window:resize', ['$event'])
    onResize(event){
        if(this.isCollapsed){
            this.minWidth = event.target.innerWidth;
        }else{
            this.minWidth = event.target.innerWidth - 280;
        }
    }

    ngOnInit(): void {
        this.loadingSubscription = this.loadingSingletonService.loadingStatus.subscribe((value) => setTimeout(()=>{
            this.isContentLoading = value;
        }));
        this.tabSelectorSubscription = this.tabSelectorService.currentModule.subscribe((value)=> setTimeout(()=>{
            this.activeModule = value;
        }));
    }

    ngOnDestroy(): void {
        this.loadingSubscription.unsubscribe();
    }

    collapsedStateChange(event:boolean){
        this.isCollapsed = event;
        this.setMinWidth();
    }

    setMinWidth(){
        if(this.isCollapsed){
            this.minWidth = window.innerWidth;
        }else{
            this.minWidth = window.innerWidth - 280;
        }
    }

    showNotification(message: string) {
        this.notificationService.warning("Notificación de sistema",message);
    }
}
