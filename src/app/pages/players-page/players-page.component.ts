import { Component, OnInit } from '@angular/core';
import {TabSelectorService} from '../../core/services/TabSelector.service';

@Component({
  selector: 'app-players-page',
  templateUrl: './players-page.component.html',
  styleUrls: ['./players-page.component.css']
})
export class PlayersPageComponent implements OnInit {

  constructor(private tabSelectorService: TabSelectorService) { }

  ngOnInit(): void {
      this.tabSelectorService.module = 3;
  }

}
