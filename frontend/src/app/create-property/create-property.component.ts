import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../api/client/properties/property.service';

@Component({
  selector: 'app-create-property',
  templateUrl: './create-property.component.html',
  styleUrls: ['./create-property.component.css']
})
export class CreatePropertyComponent implements OnInit {

  prService: PropertyService;

  constructor(prService_param: PropertyService) {
    this.prService = prService_param;
   }

  ngOnInit() {
  }

  onSubmit(submittedForm) {
    if (submittedForm.invalid) {
      return;
    }
    console.log(submittedForm);
    this.prService.addProperty(submittedForm.value.name, submittedForm.value.address);
  }
}
