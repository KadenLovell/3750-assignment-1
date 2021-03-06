import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from './login.service';
import { User } from '../user';

// shared
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  model: any;
  response: any;
  errors: any;
  view: any;

  constructor(private route: ActivatedRoute, private readonly router: Router, private _userService: UserService, private readonly _loginService: LoginService) { }

  ngOnInit(): void {
    this.view = 1;
    this.model = {};
    this.model.dateOfBirth = [];
  }

  resetPassword() {
    // TODO: 
    // send questions + new password to server,
    // validate the questions on the server for security,
    // if no match, show error message, else update password
    return;
  }

  login() {
    // if there are loading animations, handle the state here: IE: this.loading = true;
    this._loginService.login(this.model).then(response => {
      // if there are loading animations, handle the state here: IE: this.loading = false;
      this.response = response;
      this.errors = response.errors;

      // if result was successful: set shared user, then route to home component
      if (this.response && this.response.success) {
        const user: User = {
          id: response.user.id,
          username: response.user.username,
          email: response.user.email,
          firstname: response.user.firstname,
          lastname: response.user.lastname,
          dateOfBirth: response.user.dateOfBirth
        }

        this._userService.setUser(user);

        this.router.navigate(['../home'], { relativeTo: this.route });
      }
    });
  }

  createUser() {
    // if there are loading animations, handle the state here: IE: this.loading = true;
    this._loginService.addUser(this.model).then(response => {
      // if there are loading animations, handle the state here: IE: this.loading = false;
      this.response = response;
      this.errors = response.errors;

      if (this.errors) {
        return;
      }

      // if result was successful: set shared user, then route to home component
      if (this.response && this.response.success) {
        const user: User = {
          id: response.user.id,
          username: response.user.username,
          email: response.user.email,
          firstname: response.user.firstname,
          lastname: response.user.lastname,
          dateOfBirth: response.user.dateOfBirth
        }

        this._userService.setUser(user);

        this.router.navigate(['../home'], { relativeTo: this.route });
      }
    });
  }

  loadQuestions() {
    // TODO:
    // pass username to server
    // if server returns status 200, set questions in the model
    // if server returns error, "username doesn't exist"
    return;
  }

  resetViewstate() {
    this.errors = {};
  }
}
