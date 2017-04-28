var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { EventModel } from "./shared/event.model";
var EventThumbComp = (function () {
    function EventThumbComp() {
        this.eventClick = new EventEmitter();
        this.randomProp = "GG_thumbnail";
    }
    EventThumbComp.prototype.onClick_1 = function () {
        this.eventClick.emit(this.event);
    };
    EventThumbComp.prototype.getStartTimeClass = function () {
        var isEarlyStart = this.event && this.event.time == '8:00 am';
        return { green: isEarlyStart, bold: isEarlyStart };
        /*
        if (this.event && this.event.time === '8:00 am')
            return ['green', 'bold'] // or 'green bold';
        return [];
        */
    };
    return EventThumbComp;
}());
__decorate([
    Input(),
    __metadata("design:type", EventModel)
], EventThumbComp.prototype, "event", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], EventThumbComp.prototype, "eventClick", void 0);
EventThumbComp = __decorate([
    Component({
        selector: "event-thumbnail",
        templateUrl: "./event-thumb.comp.html",
        styles: [
            ".pad-left {margin-left: 10px};",
            "thumbnail {min-height:200px;}",
            ".green {color: #008800 !important;} ]",
            ".bold {font-weight: bold;}"
        ]
    })
], EventThumbComp);
export { EventThumbComp };
//# sourceMappingURL=C:/dev/Angular2T1/src/Angular2Test1/app/src/app/event/event-thumb.comp.js.map