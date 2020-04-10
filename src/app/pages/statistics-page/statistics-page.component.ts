import { Component, OnInit } from '@angular/core';
import {VenadosStatisticsService} from '../../core/services/VenadosStatisticsService';
import {LoadingService} from '../../core/services/Loading.service';
import {StatisticsModel} from '../../core/models/Statistics.model';
import {TabSelectorService} from '../../core/services/TabSelector.service';
import {NzNotificationService} from 'ng-zorro-antd';

@Component({
  selector: 'app-statistics-page',
  templateUrl: './statistics-page.component.html',
  styleUrls: ['./statistics-page.component.css']
})
export class StatisticsPageComponent implements OnInit {
    statistics: Array<StatisticsModel> = new Array<StatisticsModel>();

  constructor(private venadosStatisticsService: VenadosStatisticsService,
              private loadingService: LoadingService,
              private tabSelectorService: TabSelectorService,
              private notificationService: NzNotificationService) { }

  ngOnInit(): void {
      this.tabSelectorService.module = 2;
      this.loadingService.startLoading();
      let promise = this.venadosStatisticsService.getAll().toPromise();
      promise.then( response =>{
          this.statistics = this.venadosStatisticsService.parseJson(response)
      }).catch(error=>{
          this.notificationService.error("Error de conexión","No se pudo establecer la comunicación con el servidor debido al siguiente error: " + error.message);
      }).finally(()=>
        this.loadingService.stopLoading()
      )
  }

  getLoadingState(): boolean{
      return this.loadingService.loading;
  }

}
