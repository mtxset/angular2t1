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
import { Http, Headers, RequestOptions } from "@angular/http";
import { Subject, Observable } from 'rxjs/Rx';
var EventService = (function () {
    function EventService(_http) {
        this._http = _http;
        this.testTimeout = 100;
        this.baseSwapioUrl = "http://swapi.co/api/";
        this.baseUrl = "http://localhost:54110/api/";
        this.tempVar = "null";
        this._headers = new Headers();
    }
    EventService.prototype.getValues = function () {
        var sm = this._http.get(this.baseSwapioUrl + "planets/1")
            .map(function (res) { return res.json(); });
        return sm;
    };
    EventService.prototype.getEventsOLD = function () {
        var subject = new Subject();
        setTimeout(function () {
            subject.next(EVENTS);
            subject.complete();
        }, 100);
        return subject;
    };
    EventService.prototype.getEvents = function () {
        return this._http.get(this.baseUrl + "events")
            .map(function (res) {
            return res.json();
        })
            .catch(this.handleError);
    };
    EventService.prototype.handleError = function (error) {
        return Observable.throw(error.statusText);
    };
    EventService.prototype.getEventOLD = function (id) {
        return EVENTS.find(function (x) { return x.id === id; });
    };
    EventService.prototype.getEvent = function (id) {
        return this._http.get(this.baseUrl + "events/" + id)
            .map(function (res) {
            return res.json();
        })
            .catch(this.handleError);
    };
    EventService.prototype.saveEvent = function (event) {
        var headers = new Headers({ "Content-Type": "application/json" });
        var option = new RequestOptions({ headers: headers });
        return this._http.post(this.baseUrl + "events", JSON.stringify(event), option)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    EventService.prototype.updateEvent = function (event) {
        var headers = new Headers({ "Content-Type": "application/json" });
        var option = new RequestOptions({ headers: headers });
        return this._http.put(this.baseUrl + "events/" + event.id, JSON.stringify(event), option)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    EventService.prototype.searchSessions = function (searchString) {
        return this._http.get(this.baseUrl + "session?search=" + searchString)
            .map(function (res) {
            return res.json();
        })
            .catch(this.handleError);
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
        price: '100',
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
                voters: ["gg", "gg", "gg", "gg"]
            }
        ]
    },
    {
        id: 2,
        name: 'Mirana',
        date: new Date('9/26/2017'),
        time: 'Midnight',
        price: '625',
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
                voters: []
            }
        ]
    },
    {
        id: 3,
        name: 'Angular Connect',
        date: new Date('9/26/2036'),
        time: '10:00 am',
        price: '599.99',
        imageUrl: 'assets/images/dota2heroes/256x144/invoker_full.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        },
        sessions: [
            {
                id: 1,
                name: "Using Angular 4 Pipes",
                presenter: "Peter Bacon Darwin",
                duration: 1,
                level: "Intermediate",
                abstract: "Learn all about the new pipes in Angular 4, both \n          how to write them, and how to get the new AI CLI to write \n          them for you. Given by the famous PBD, president of Angular \n          University (formerly Oxford University)",
                voters: ['bradgreen', 'igorminar', 'martinfowler']
            },
            {
                id: 2,
                name: "Getting the most out of your dev team",
                presenter: "Jeff Cross",
                duration: 1,
                level: "Intermediate",
                abstract: "We all know that our dev teams work hard, but with \n          the right management they can be even more productive, without \n          overworking them. In this session I'll show you how to get the \n          best results from the talent you already have on staff.",
                voters: ['johnpapa', 'bradgreen', 'igorminar', 'martinfowler']
            },
            {
                id: 3,
                name: "Angular 4 Performance Metrics",
                presenter: "Rob Wormald",
                duration: 2,
                level: "Advanced",
                abstract: "Angular 4 Performance is hot. In this session, we'll see \n          how Angular gets such great performance by preloading data on \n          your users devices before they even hit your site using the \n          new predictive algorithms and thought reading software \n          built into Angular 4.",
                voters: []
            },
            {
                id: 4,
                name: "Angular 5 Look Ahead",
                presenter: "Brad Green",
                duration: 2,
                level: "Advanced",
                abstract: "Even though Angular 5 is still 6 years away, we all want \n          to know all about it so that we can spend endless hours in meetings \n          debating if we should use Angular 4 or not. This talk will look at \n          Angular 6 even though no code has yet been written for it. We'll \n          look at what it might do, and how to convince your manager to \n          hold off on any new apps until it's released",
                voters: []
            },
            {
                id: 5,
                name: "Basics of Angular 4",
                presenter: "John Papa",
                duration: 2,
                level: "Beginner",
                abstract: "It's time to learn the basics of Angular 4. This talk \n          will give you everything you need to know about Angular 4 to \n          get started with it today and be building UI's for your self \n          driving cars and butler-bots in no time.",
                voters: ['bradgreen', 'igorminar']
            }
        ]
    }
];
//# sourceMappingURL=C:/dev/Angular2T1/src/Angular2Test1/app/src/app/event/shared/event.service.js.map