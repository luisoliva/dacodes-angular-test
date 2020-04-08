import { Component, OnInit } from '@angular/core';
import {Game} from '../../../core/models/Game';
import {VenadosGamesDataService} from '../../../core/services/VenadosGamesData.service';

@Component({
  selector: 'app-game-container',
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.css']
})
export class GameContainerComponent implements OnInit {
    public gameData: Game = null;

    constructor(private gamesService: VenadosGamesDataService) { }

    ngOnInit(): void {
        this.gamesService.getAll();
    }

}
