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

  constructor(
    private http: HttpClient
  ) {}

  public queryProperties(
    query: any = {},
    params: { limit: number; offset: number } = { limit: 10, offset: 0 }
  ): Observable<Property[]> {
    return this.http.post<Property[]>(PROPERTIES_PATH, query, {
      params: {
        limit: `${params.limit}`,
        offset: `${params.offset}`
      }
    });
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
    const newProp: Property = {_id: <string><any> random(1, 6), name: name, address: address, units: []};
    this.properties.push(newProp);
  }
}
