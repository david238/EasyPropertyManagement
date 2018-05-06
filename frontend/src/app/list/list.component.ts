import { Component, OnInit, Input } from '@angular/core';
import { Unit } from '../api/client/properties/property.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  @Input() units: Unit[];

  constructor() { }

  ngOnInit() {
  }

}
