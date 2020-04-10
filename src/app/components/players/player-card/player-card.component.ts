import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {PlayerModel} from '../../../core/models/Player.model';
import {CoachModel} from '../../../core/models/Coach.model';
import {NzModalService} from 'ng-zorro-antd';

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
    modal;

    constructor(private modalService:NzModalService) { }

    ngOnInit(): void {
        if(this.model.hasOwnProperty('role')){
            this.isCoach = true;
            this.coach = this.model;
        }else{
            this.player = this.model;
            this.isCoach = false;
        }
    }

    showInformationModal(modalTitle: TemplateRef<{}>, modalContent: TemplateRef<{}>, modalFooter: TemplateRef<{}>){
        this.modal = this.modalService.create({
            nzTitle: modalTitle,
            nzContent: modalContent,
            nzFooter: modalFooter,
            nzStyle:{top:'30px'}
        })
    }

    destroyModal(){
        this.modal.destroy();
    }
}
