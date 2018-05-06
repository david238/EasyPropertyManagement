import { Component, OnInit, Input} from '@angular/core';

import { Property, Unit } from '../api/client/properties/property.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  @Input() properties: Property[];
  chosenProperty_id = '';

  // populate units array with selected property
  units: Unit[];

  constructor() { }

  ngOnInit() {
  }

  onChoose(prop_id) {
    this.chosenProperty_id = prop_id;
    // console.log('Chosen Property is:' + this.chosenProperty_id);
  }

  getUnits() {
    // if (this.chosenProperty_id === '')
    // {
    //   // return copy of property always if chosen property is empty
    //   return this.properties.slice();
    // }
    this.properties.filter((property) => {
      if (property._id === this.chosenProperty_id) {
        this.units = property.units;
      }

    });
    return this.units;
  }


}
