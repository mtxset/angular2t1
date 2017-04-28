var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { EventService } from "../shared/event.service";
var EventRouteActivator = (function () {
    function EventRouteActivator(_eventService, _router) {
        this._eventService = _eventService;
        this._router = _router;
    }
    EventRouteActivator.prototype.canActivate = function (route) {
        var eventExists = !!this._eventService.getEvent(+route.params['id']);
        if (!eventExists)
            this._router.navigate(['/404']);
        return eventExists;
    };
    return EventRouteActivator;
}());
EventRouteActivator = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [EventService,
        Router])
], EventRouteActivator);
export { EventRouteActivator };
//# sourceMappingURL=C:/dev/Angular2T1/src/Angular2Test1/app/src/app/event/event-details/event-route-activator.service.js.map