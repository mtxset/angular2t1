import { Component } from '@angular/core';
import { AuthService }from "../user/auth.service";


@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.comp.html',
    styleUrls: ["./navbar.comp.css"]
})
export class NavBarComp {
    constructor (private _authService: AuthService)
    {

    }
}
