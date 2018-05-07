import { Component, OnInit, Input } from '@angular/core';
import { Unit, Property } from '../api/client/properties/property.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  @Input() properties: Property[];
  @Input() units: Unit[];
  chosenProperty_id = '';


  constructor() { }

  ngOnInit() {
  }

  onChoose(prop_id) {
    this.chosenProperty_id = prop_id;
    this.properties.filter((property) => {
      if (property._id === this.chosenProperty_id) {
        this.units = property.units;
      }

    });
    return this.units;
    // console.log('Chosen Property is:' + this.chosenProperty_id);
  }


}
