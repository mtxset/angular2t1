import { Component } from "@angular/core";
import { EventService } from "../shared/event.service";
import { ActivatedRoute } from "@angular/router";
import { SessionModel, EventModel } from "../shared/index";

@Component({
    templateUrl: "./event-detail.comp.html",
    styles:[ ".event-image:{height:100px;}",
    "a {cursor:pointer}"]
})

export class EventDetailComp {
    event: EventModel;
    addMode: boolean;
    filterBy: string = "all";
    sortBy: string = "votes";

    constructor(private _eventService: EventService,
        private _route: ActivatedRoute) { }

    ngOnInit()
    {
        this.event = this._eventService.getEvent(
        +this._route.snapshot.params['id']);
    }

    addSession()
    {
        this.addMode = true;
    }

    saveNewSession(session: SessionModel)
    {
        const newId = Math.max.apply(null, this.event.sessions.map(x=>x.id)) + 1;

        session.id = newId; 
        this.event.sessions.push(session);
        this._eventService.updateEvent(this.event);

        this.addMode = false;
    }

    cancelAddSession()
    {
        this.addMode = false;
    }
}