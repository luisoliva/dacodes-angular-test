import { Component, OnInit } from '@angular/core';
import {VenadosGamesDataService} from '../../core/services/VenadosGamesData.service';
import {Games} from '../../core/models/Games';
import {LoadingService} from '../../core/services/Loading.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
    private gamesByMonth: Array<Games>;

    constructor(private gamesService: VenadosGamesDataService,
                private loadingService: LoadingService) { }

    ngOnInit(): void {
        this.getApiData();
    }

    getApiData(){
        this.loadingService.startLoading();
        let request = this.gamesService.getAll();
        request.toPromise()
            .then(response=>{
                this.gamesByMonth = this.gamesService.parseModel(response);
            })
            .catch(error=>{
                console.log(error);
            })
            .finally(()=>{
                console.log(this.gamesByMonth);
                this.loadingService.stopLoading();
            })
    }

}
