import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
    providedIn: 'root'
})
// TODO: get http context working on server
// then create a getActiveUser() function that
// fires to the UserController to request the
// active user based on the current cookie
// tied to the http request.
export class UserService {
    user: User;

    setUser(user: User) {
        this.user = user;
    }

    getUser() {
        return this.user;
    }
}