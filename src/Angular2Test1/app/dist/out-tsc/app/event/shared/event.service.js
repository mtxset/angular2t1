var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Subject } from 'rxjs/Rx';
var EventService = (function () {
    function EventService(_http) {
        var _this = this;
        this._http = _http;
        this.testTimeout = 100;
        this.baseSwapioUrl = "http://swapi.co/api/";
        this.tempVar = "null";
        this._headers = new Headers();
        this.getValues().subscribe(function (data) { return _this.tempVar = data; });
    }
    EventService.prototype.getValues = function () {
        var sm = this._http.get(this.baseSwapioUrl + "planets/1").map(function (res) { return res.json(); });
        return sm;
    };
    EventService.prototype.getEvents = function () {
        var subject = new Subject();
        setTimeout(function () { subject.next(EVENTS); subject.complete(); }, this.testTimeout);
        return subject;
    };
    EventService.prototype.getEvent = function (id) {
        return EVENTS.find(function (x) { return x.id === id; });
    };
    EventService.prototype.saveEvent = function (event) {
        event.id = 999;
        event.session = [];
        EVENTS.push(event);
    };
    EventService.prototype.ngOnInit = function () {
    };
    return EventService;
}());
EventService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], EventService);
export { EventService };
var EVENTS = [
    {
        id: 1,
        name: 'Pudge',
        date: new Date('9/26/2036'),
        time: '8:00 am',
        price: '100 gold',
        imageUrl: 'assets/images/dota2heroes/256x144/pudge_full.png',
        location: {
            address: 'Mid Point',
            city: 'Dire',
            country: 'Azengard'
        },
        sessions: [
            {
                id: 1,
                name: "Mid gank",
                presenter: "IO",
                duration: 1,
                level: "Ez",
                abstract: "Thether bomb",
            }
        ]
    },
    {
        id: 2,
        name: 'Mirana',
        date: new Date('9/26/2017'),
        time: 'Midnight',
        price: '625 gold',
        imageUrl: 'assets/images/dota2heroes/256x144/mirana_full.png',
        onlineUrl: "blog.dota2.com",
        sessions: [
            {
                id: 1,
                name: "Mid gank",
                presenter: "IO",
                duration: 1,
                level: "Ez",
                abstract: "Thether bomb",
            }
        ]
    },
];
//# sourceMappingURL=C:/dev/Angular2T1/src/Angular2Test1/app/src/app/event/shared/event.service.js.map