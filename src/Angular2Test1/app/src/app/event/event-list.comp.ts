import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/event.service";
import { ActivatedRoute } from "@angular/router";
import { EventModel } from "./shared/event.model";

@Component({
    selector: "event-list",
    templateUrl: "./event-list.comp.html",
})
export class EventListComp implements OnInit {

    eventData: EventModel;
    tempValue: any;

    constructor(
        private _eventService: EventService,  
        private _route: ActivatedRoute) 
    {
    }

    handleEventClicked(data) {
        this._eventService.getValues().subscribe(data => this.tempValue = data);
        
        console.log(this.tempValue);
    }

    ngOnInit()
    {
        this.eventData = this._route.snapshot.data['eventData'];
    }
}