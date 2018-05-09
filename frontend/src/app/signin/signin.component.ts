import { Component, OnInit } from '@angular/core';
import { UserService } from '../api/client/users/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  usService: UserService;

  constructor(usService_param: UserService) {
    this.usService = usService_param;
   }

  ngOnInit() {
  }

  onSubmit(submittedForm) {
    console.log('email signin with is: ' + submittedForm.value.email);
    if (submittedForm.invalid) {
      return;
    }
    const em = submittedForm.value.email;
    const pw = submittedForm.value.password;

    // console.log(submittedForm);
    this.usService.signin( em, pw);
  }

}
