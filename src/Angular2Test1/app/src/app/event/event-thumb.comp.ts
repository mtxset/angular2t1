import { Component, Input, Output, EventEmitter } from "@angular/core";
import { EventModel } from "./shared/event.model";

@Component({
    selector: "event-thumbnail",
    templateUrl: "./event-thumb.comp.html",
    styles: [
        ".pad-left {margin-left: 10px};",
        ".thumbnail {min-height:200px;}",
        ".green {color: #008800 !important;} ]",
        ".bold {font-weight: bold;}"]
})

export class EventThumbComp {
    @Input() event: EventModel;
    @Output() eventClick = new EventEmitter();
    randomProp: any = "GG_thumbnail";

    onClick_1() {
        this.eventClick.emit(this.event);
    }

    getStartTimeClass() {
        const isEarlyStart = this.event && this.event.time == "8:00 am";
        return { green: isEarlyStart, bold: isEarlyStart };

        /*
        if (this.event && this.event.time === '8:00 am')
            return ['green', 'bold'] // or 'green bold';
        return [];
        */
    }
}