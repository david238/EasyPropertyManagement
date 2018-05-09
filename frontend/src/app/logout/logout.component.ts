import { Component, OnInit } from '@angular/core';
import { UserService } from '../api/client/users/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  usService: UserService;

  constructor(private usService_param: UserService, private router: Router) {
    this.usService = usService_param;
   }

  ngOnInit() {
  }

  onLogout() {
    this.usService.logout();
    this.router.navigate(['/authentication', 'signin']);
  }

}
