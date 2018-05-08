import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { random } from 'lodash';
import { APIConfig } from '../api.config';

const PROPERTIES_PATH = `${APIConfig.BASE_API_PATH}/api/properties`;

export interface Unit {
  number: string;
  floor: number;
  rent: number;
  vacant?: boolean;
}

export interface Property {
  _id?: string; // Assigned automatically by datastore
  name: string;
  address: string;
  units: Unit[];
}


@Injectable()
export class PropertyService {

  private properties: Property[] = [];
  private genID = '';

  constructor(
    private http: HttpClient
  ) {this.loadProperties();
  }

  public queryProperties(
    query: any = {},
    params: { limit: number; offset: number } = { limit: 10, offset: 0 }
  ): Observable<Property[]> {
    return this.http.get<Property[]>(PROPERTIES_PATH, {
      params: {
        limit: `${params.limit}`,
        offset: `${params.offset}`
      }
    });
  }

  public insertProperty(name, address) {
    const newProperty: Property = {name: name , address: address, units: []};
    console.log(newProperty);
    console.log(JSON.stringify(newProperty));
    console.log('inside insert property ' + newProperty.name);
    return this.http.post(PROPERTIES_PATH, newProperty, {responseType: 'text'});

  }

  loadProperties() {
    this.queryProperties()
      .subscribe(properties => {
        this.properties = properties;
      });
  }

  getProperties() {
    return this.properties;
  }

  addProperty(name, address) {
    this.insertProperty(name, address).subscribe(
      gen_id => {
        this.genID =  gen_id;
        //console.log('genennee: ' + this.genID);
      });
    // const gen_id = <string><any> random(1, 10000) + 'EPM'; //Added EPM just to set it as string for comparison === to work
    const newProp: Property = {_id: this.genID , name: name, address: address, units: []};
    this.properties.push(newProp);
  }

  addUnitToProperty(prop_id, newUnit) {
    // console.log('insideaddunit: ' + prop_id + newUnit.floor + newUnit.vacant + newUnit.rent + newUnit.number);
    const pos = this.properties.findIndex((property) => {
        // console.log('property_id: ' + property._id + ' prop_id: ' + prop_id);
        return property._id === prop_id;
    });

     console.log('position index:  ' + pos + ' obj: ' + this.properties[pos]);

    this.properties[pos].units.push(newUnit);
    // pos[0].units.push(newUnit);
    // pos.units.push(newUnit);
  }
}
