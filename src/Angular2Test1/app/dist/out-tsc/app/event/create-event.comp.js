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
import { Router } from "@angular/router";
import { EventService } from "./shared/event.service";
var CreateEventComp = (function () {
    function CreateEventComp(router, _eventService) {
        this.router = router;
        this._eventService = _eventService;
        this.isDirty = true;
    }
    CreateEventComp.prototype.saveEvent = function (formValues) {
        this._eventService.saveEvent(formValues);
        this.isDirty = false;
        this.router.navigate(["/events"]);
    };
    CreateEventComp.prototype.cancel = function () {
        this.router.navigate(["/events"]);
    };
    return CreateEventComp;
}());
CreateEventComp = __decorate([
    Component({
        templateUrl: "./create-event.comp.html",
        styles: ["em {float: right; color: #e05c65; padding-left: 10px",
            ".error input {background-color: #e3c3c5;}",
            ".error ::-webkit-input-placeholder {color : #999;}",
            ".error ::-moz-placeholder {color : #999;}",
            ".error :moz-placeholder {color : #999;}"]
    }),
    __metadata("design:paramtypes", [Router,
        EventService])
], CreateEventComp);
export { CreateEventComp };
//# sourceMappingURL=C:/dev/Angular2T1/src/Angular2Test1/app/src/app/event/create-event.comp.js.map