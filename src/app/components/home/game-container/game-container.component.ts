import { Component, OnInit } from '@angular/core';
import {Game} from '../../../core/models/Game';

@Component({
  selector: 'app-game-container',
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.css']
})
export class GameContainerComponent implements OnInit {
    public gameData: Game = null;

    constructor() { }

    ngOnInit(): void {

    }
}
