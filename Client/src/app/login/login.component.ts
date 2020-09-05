import { Component, ViewChild, ChangeDetectorRef, OnInit } from "@angular/core";
import { NgForm, NgModel } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model = [];

  view: any;
  constructor() { }

  ngOnInit(): void {
    this.view = 1;
  }

  resetPassword() {
    // TODO: 
    // send questions + new password to server,
    // validate the questions on the server for security,
    // if no match, show error message, else update password
  }

  login() {
    // TODO:
    // pass username, and password to server (encrypted if possible)
    // if server returns no users, have UI display "username, or password was incorrect." error
    // else, process the cookie returned from the server (may be done in a v2.0), and login to site
    // redirect to home
  }

  createUser() {
    // TODO:
    // pass the fields to the server
    // if server returns status 200, view = 1
    // if server returns error: emailDuplicate, display error message
    // if server returns error: usernameDuplicate, display error message
  }
  loadQuestions() {
    // TODO:
    // pass username to server
    // if server returns status 200, set questions in the model
    // if server returns error, "username doesn't exist"
  }
}
