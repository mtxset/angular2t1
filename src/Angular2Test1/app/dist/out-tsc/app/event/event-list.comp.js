var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { EventService } from "./shared/event.service";
import { ActivatedRoute } from "@angular/router";
var EventListComp = (function () {
    function EventListComp(_eventService, _route) {
        this._eventService = _eventService;
        this._route = _route;
    }
    EventListComp.prototype.handleEventClicked = function (data) {
        var _this = this;
        this._eventService.getValues().subscribe(function (data) { return _this.tempValue = data; });
        console.log(this.tempValue);
    };
    EventListComp.prototype.ngOnInit = function () {
        this.eventData = this._route.snapshot.data['eventData'];
    };
    return EventListComp;
}());
EventListComp = __decorate([
    Component({
        selector: "event-list",
        templateUrl: "./event-list.comp.html",
    }),
    __metadata("design:paramtypes", [EventService,
        ActivatedRoute])
], EventListComp);
export { EventListComp };
//# sourceMappingURL=C:/dev/Angular2T1/src/Angular2Test1/app/src/app/event/event-list.comp.js.map