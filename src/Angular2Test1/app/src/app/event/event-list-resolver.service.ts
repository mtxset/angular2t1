﻿import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { EventService } from "./shared/event.service";

@Injectable()
export class EventListResolver implements Resolve<any>
{

    constructor(private _eventService: EventService) {

    }

    resolve()
    {
        return this._eventService.getEvents().map(eventData => eventData);
    }
}