import { Component, OnInit } from '@angular/core';
import { UserService } from '../api/client/users/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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
