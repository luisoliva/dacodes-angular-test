import { Component, OnInit } from '@angular/core';
import {Game} from '../../../core/models/Game';
import {VenadosGamesDataService} from '../../../core/services/VenadosGamesData.service';

@Component({
  selector: 'app-game-container',
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.css']
})
export class GameContainerComponent implements OnInit {
    private gameData: Game;

    constructor(private gamesService: VenadosGamesDataService) { }

    ngOnInit(): void {
       let request =  this.gamesService.getAll();

       request.toPromise()
           .then(response => {
                console.log(response);
            })
           .catch(error =>{
               console.log(error)
           })
           .finally(()=>{

           });
    }

}
