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
import { EventService } from "../shared/event.service";
import { ActivatedRoute } from "@angular/router";
var EventDetailComp = (function () {
    function EventDetailComp(_eventService, _route) {
        this._eventService = _eventService;
        this._route = _route;
        this.filterBy = "all";
        this.sortBy = "votes";
    }
    EventDetailComp.prototype.ngOnInit = function () {
        this.resetCompState();
    };
    EventDetailComp.prototype.addSession = function () {
        this.addMode = true;
    };
    EventDetailComp.prototype.saveNewSession = function (session) {
        var newId = Math.max.apply(null, this.event.sessions.map(function (x) { return x.id; })) + 1;
        session.id = newId;
        this.event.sessions.push(session);
        this._eventService.updateEvent(this.event).subscribe();
        this.addMode = false;
    };
    EventDetailComp.prototype.cancelAddSession = function () {
        this.addMode = false;
    };
    EventDetailComp.prototype.resetCompState = function () {
        var _this = this;
        this._route.data.forEach(function (data) {
            _this.event = data['event'];
            _this.addMode = false;
        });
    };
    return EventDetailComp;
}());
EventDetailComp = __decorate([
    Component({
        templateUrl: "./event-detail.comp.html",
        styles: [".event-image:{height:100px;}",
            "a {cursor:pointer}"]
    }),
    __metadata("design:paramtypes", [EventService,
        ActivatedRoute])
], EventDetailComp);
export { EventDetailComp };
//# sourceMappingURL=C:/dev/Angular2T1/src/Angular2Test1/app/src/app/event/event-details/event-detail.comp.js.map