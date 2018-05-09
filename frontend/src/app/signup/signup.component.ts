import { Component, OnInit } from '@angular/core';
import { UserService } from '../api/client/users/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  usService: UserService;

  constructor(usService_param: UserService) {
    this.usService = usService_param;
  }

  ngOnInit() {
  }

  onSubmit(submittedForm) {
    console.log('firstname is' + submittedForm.value.firstname);
    if (submittedForm.invalid) {
      return;
    }
    const fn = submittedForm.value.firstname;
    const ln = submittedForm.value.lastname;
    const em = submittedForm.value.email;
    const pw = submittedForm.value.password;

    // console.log(submittedForm);
    this.usService.addUser(fn, ln, em, pw);

  }
}
