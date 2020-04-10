import {Component, Input, OnInit} from '@angular/core';
import {PlayerModel} from '../../../core/models/Player.model';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css']
})
export class PlayerCardComponent implements OnInit {
    @Input() player: PlayerModel;

    constructor() { }

    ngOnInit(): void {
    }

}
