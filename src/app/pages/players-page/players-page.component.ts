import { Component, OnInit } from '@angular/core';
import {TabSelectorService} from '../../core/services/TabSelector.service';
import {LoadingService} from '../../core/services/Loading.service';
import {VenadosPlayersService} from '../../core/services/VenadosPlayers.service';
import {TeamModel} from '../../core/models/Team.model';

@Component({
  selector: 'app-players-page',
  templateUrl: './players-page.component.html',
  styleUrls: ['./players-page.component.css']
})
export class PlayersPageComponent implements OnInit {
    team: TeamModel;

  constructor(private tabSelectorService: TabSelectorService,
              private loadingService: LoadingService,
              private playersService: VenadosPlayersService) { }

  ngOnInit(): void {
      this.loadingService.startLoading();
      this.tabSelectorService.module = 3;
      let promise = this.playersService.getAll().toPromise();
      promise.then(response=>{
          this.team = this.playersService.parseJson(response);
          console.log(this.team);
      }).catch(error =>{
      }).finally(()=>{
        this.loadingService.stopLoading();
      })
  }

  getLoadingState(): boolean{
      return this.loadingService.loading;
  }

}
