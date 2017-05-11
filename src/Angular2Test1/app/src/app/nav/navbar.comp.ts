import { Component } from '@angular/core';
import { AuthService } from "../user/auth.service";
import { SessionModel } from "../event/shared/event.model";
import { EventService } from "../event/shared/event.service";


@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.comp.html',
    styleUrls: ["./navbar.comp.css"]
})
export class NavBarComp {
    searchTerm: string = "";
    foundSessions: SessionModel[];

    constructor (
        public _authService: AuthService,
        public _eventService: EventService)
    {

    }

    searchSessions(searchTerm)
    {
        this._eventService.searchSessions(searchTerm)
            .subscribe(data => 
            { 
                this.foundSessions = data;
                console.log(this.foundSessions);
            });
    }
}
