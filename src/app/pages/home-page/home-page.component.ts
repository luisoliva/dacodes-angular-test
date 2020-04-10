import { Component, OnInit } from '@angular/core';
import {VenadosGamesDataService} from '../../core/services/VenadosGamesData.service';
import {Games} from '../../core/models/Games';
import {LoadingService} from '../../core/services/Loading.service';
import {TabSelectorService} from '../../core/services/TabSelector.service';
import {NzNotificationService} from 'ng-zorro-antd';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
    cupGamesByMonthData: Array<Games>;
    ascentGamesByMonthData: Array<Games>;

    constructor(private gamesService: VenadosGamesDataService,
                private loadingService: LoadingService,
                private tabSelectorService: TabSelectorService,
                private notificationService: NzNotificationService) { }

    ngOnInit(): void {
        this.getApiData();
        this.tabSelectorService.module = 1;
    }

    getLoadingState(): boolean{
        return this.loadingService.loading;
    }

    getApiData(){
        this.loadingService.startLoading();
        let request = this.gamesService.getAll();
        request.toPromise()
            .then(response=>{
                this.cupGamesByMonthData = this.gamesService.parseJson(response, 'Copa MX');
                this.ascentGamesByMonthData = this.gamesService.parseJson(response, 'Ascenso MX');
            })
            .catch(error=>{
                debugger
                this.notificationService.error("Error de conexión","No se pudo establecer la comunicación con el servidor debido al siguiente error: " + error.message);
            })
            .finally(()=>{
                this.loadingService.stopLoading();
            })
    }
}
