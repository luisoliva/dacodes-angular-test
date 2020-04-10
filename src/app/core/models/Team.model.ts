import {PlayerModel} from './Player.model';
import {CoachModel} from './Coach.model';

export class TeamModel {
    forwards: Array<PlayerModel> = new Array<PlayerModel>();
    centers: Array<PlayerModel> = new Array<PlayerModel>();
    defenses: Array<PlayerModel> = new Array<PlayerModel>();
    goalkeepers: Array<PlayerModel> = new Array<PlayerModel>();
    coaches: Array<CoachModel> = new Array<CoachModel>();

    constructor() {
    }
}
