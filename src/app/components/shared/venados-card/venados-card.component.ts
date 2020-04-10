import {Component, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-venados-card',
  templateUrl: './venados-card.component.html',
  styleUrls: ['./venados-card.component.css']
})
export class VenadosCardComponent implements OnInit {
    @Input() headerComponent: TemplateRef<any>;
    @Input() bodyComponent: TemplateRef<any>;

    constructor() { }

    ngOnInit(): void {
    }

}
