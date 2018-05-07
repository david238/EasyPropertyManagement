import { Component, OnInit, Input } from '@angular/core';
import { Unit, Property, PropertyService } from '../api/client/properties/property.service';

@Component({
  selector: 'app-create-units',
  templateUrl: './create-units.component.html',
  styleUrls: ['./create-units.component.css']
})
export class CreateUnitsComponent implements OnInit {

  vacancyArray = [
    {display: 'Available', value: true },
    {display: 'Occupied', value: false }
  ];

  @Input() properties: Property[];
  prService: PropertyService;
  newUnit: Unit;

  constructor(prService_param: PropertyService) {
    this.prService = prService_param;
  }

  ngOnInit() {
  }

  onSubmit(submittedForm) {
    // console.log(submittedForm.value.unitfloor);
    this.newUnit = <Unit>{
    floor: submittedForm.value.unitfloor,
    number: submittedForm.value.unitnumber,
    rent: submittedForm.value.unitrent,
    vacant: submittedForm.value.unitvacancy === 'true' ? true : false
    };
    this.prService.addUnitToProperty(submittedForm.value.prop_id, this.newUnit);
  }


}
