import { Component, OnInit } from '@angular/core';

import { Property, PropertyService } from './api/client/properties/property.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'Easy Property Management';

  properties: Property[];
  prService: PropertyService;

  constructor(private propertyService: PropertyService) {
    this.prService = propertyService;
  }


  ngOnInit(): void {
    this.prService.loadProperties();
  }

  getProperties() {
    this.properties = this.prService.getProperties();
    return this.properties;
  }


}
