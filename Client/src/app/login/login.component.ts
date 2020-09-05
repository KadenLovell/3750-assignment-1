import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

  onSubmit(f: NgForm) {
    // todo: redirect to home
  }

  createUser() {
    // todo: update the html with a second view to handle user creation.
  }
}
