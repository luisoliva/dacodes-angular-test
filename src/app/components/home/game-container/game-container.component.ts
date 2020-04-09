import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../../../core/models/Game';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-game-container',
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.css']
})
export class GameContainerComponent implements OnInit {
    @Input() gameData: Game;

    constructor() { }

    ngOnInit(): void {
    }
}
