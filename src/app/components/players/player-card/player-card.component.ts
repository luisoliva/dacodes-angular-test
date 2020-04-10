import {Component, Input, OnInit} from '@angular/core';
import {PlayerModel} from '../../../core/models/Player.model';
import {CoachModel} from '../../../core/models/Coach.model';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css']
})
export class PlayerCardComponent implements OnInit {
    @Input() model: any;
    player: Partial<PlayerModel>;
    coach: Partial<CoachModel>;
    isCoach: boolean;
    constructor() { }

    ngOnInit(): void {
        debugger
        if(this.model.hasOwnProperty('role')){
            this.isCoach = true;
            this.coach = this.model;
        }else{
            this.player = this.model;
            this.isCoach = false;
        }
    }

}
