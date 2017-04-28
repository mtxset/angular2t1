﻿import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { EventService } from "./shared/event.service";

@Component({
    templateUrl:"./create-event.comp.html",
    styles:["em {float: right; color: #e05c65; padding-left: 10px",
        ".error input {background-color: #e3c3c5;}",
        ".error ::-webkit-input-placeholder {color : #999;}",
        ".error ::-moz-placeholder {color : #999;}",
        ".error :moz-placeholder {color : #999;}"]
})

export class CreateEventComp {
    event: any;
    isDirty: boolean = true;

    constructor (private router:  Router,
    private _eventService: EventService) {}

    saveEvent(formValues)
    {
        this._eventService.saveEvent(formValues);
        this.isDirty = false;
        this.router.navigate(["/events"]);
    }

    cancel() {
        this.router.navigate(["/events"]);
    }
}