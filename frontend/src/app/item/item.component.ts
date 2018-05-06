import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

@Input() item_unit;

  constructor() {
  }

  ngOnInit() {
  }

  //assign !true/false on vacant unit property
  onAssign() {
    this.item_unit.vacant = !this.item_unit.vacant;
    if (this.item_unit.vacant)
    {
      this.item_unit.status = "Available";
    }
    else
    {
      this.item_unit.status = "Occupied";
    }
  }

}
