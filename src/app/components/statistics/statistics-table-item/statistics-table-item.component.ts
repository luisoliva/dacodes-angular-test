import {Component, Input, OnInit} from '@angular/core';
import {StatisticsModel} from '../../../core/models/Statistics.model';

@Component({
  selector: 'app-statistics-table-item',
  templateUrl: './statistics-table-item.component.html',
  styleUrls: ['./statistics-table-item.component.css']
})
export class StatisticsTableItemComponent implements OnInit {
    @Input() team: StatisticsModel;

    constructor() { }

    ngOnInit(): void {
    }

}
