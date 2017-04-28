import { Component } from "@angular/core";
import { EventService } from "../shared/event.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: "./event-detail.comp.html",
    styles:[ ".event-image:{height:100px;}"]
})

export class EventDetailComp {
    event: any;

    constructor(private _eventService: EventService,
        private _route: ActivatedRoute) { }

    ngOnInit()
    {
        this.event = this._eventService.getEvent(
        +this._route.snapshot.params['id']);
    }
}