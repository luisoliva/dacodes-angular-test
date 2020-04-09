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

    getCorrectDate(): string{
        let date = formatDate(this.gameData.datetime, 'shortDate','en-US');
        let splitedDate = date.split('/');
        let year = splitedDate[2];
        let month = splitedDate[0];
        let dayInteger = parseInt(splitedDate[1]) + 1 ;
        splitedDate[0] = dayInteger.toString();
        splitedDate[1] = month;
        splitedDate[2] = year;
        return splitedDate.join("/");
    }
}
