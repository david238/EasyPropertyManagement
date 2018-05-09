import { Component, OnInit } from '@angular/core';
import { UserService } from '../api/client/users/user.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  usService: UserService;

  constructor(private usService_param: UserService) {
    this.usService = usService_param;
  }

  ngOnInit() {
  }

  isLoggedIn() {
    return this.usService.isLoggedIn();
  }

}
