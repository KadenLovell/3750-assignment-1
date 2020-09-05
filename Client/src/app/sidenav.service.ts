import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable()
export class SidenavService {
    // With this subject you can save the sidenav state and pass into other pages
    public sideNavState$: Subject<boolean> = new Subject();

    constructor() { }
}