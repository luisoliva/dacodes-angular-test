import {Component, Input, OnInit} from '@angular/core';
import {Games} from '../../../core/models/Games';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-month-card',
  templateUrl: './month-card.component.html',
  styleUrls: ['./month-card.component.css']
})
export class MonthCardComponent implements OnInit {
    @Input() gamesInMonth: Games = new Games();
    private months:Array<string> = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    constructor() { }

    ngOnInit(): void {
    }

    getMonth(): string{
        let date = formatDate(this.gamesInMonth.games[0].datetime, 'shortDate','en-US');
        let splitedDate = date.split('/');
        let monthInteger = parseInt(splitedDate[0]);
        return this.months[monthInteger-1]
    }
}
