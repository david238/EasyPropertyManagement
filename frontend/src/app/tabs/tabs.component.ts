import { Component, OnInit, Input} from '@angular/core';

import { Property, Unit, PropertyService } from '../api/client/properties/property.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  properties: Property[]; // @Input() properties: Property[]
  prService: PropertyService;

  // populate units array with selected property
  units: Unit[];

  constructor(prService_param: PropertyService) {
    this.prService = prService_param;
   }

  ngOnInit() {
  }

  getProperties() {
    this.properties = this.prService.getProperties();
    return this.properties;
  }

}
