import {Component, Input, OnInit} from '@angular/core';
import {StatisticsModel} from '../../../core/models/Statistics.model';

@Component({
  selector: 'app-statistics-table',
  templateUrl: './statistics-table.component.html',
  styleUrls: ['./statistics-table.component.css']
})
export class StatisticsTableComponent implements OnInit {
    @Input() statistics: Array<StatisticsModel>;

    constructor() { }

    ngOnInit(): void {
    }

}
