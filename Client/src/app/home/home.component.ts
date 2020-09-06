import { Component, OnInit } from '@angular/core';

// shared
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private readonly _userService: UserService) { }
  user: User;

  ngOnInit(): void {
    // this will throw exceptions until an httpcontext is created on the server
    // once the http context is created, on load, the userservice will call to 
    // get the active user based on a cookie that will be generated on login
    this.user = this._userService.getUser();
  }
}
