import { Injectable, OnInit, EventEmitter } from "@angular/core";
import { Http, Response, Headers, Request, RequestOptions } from "@angular/http";
import { Subject, Observable } from 'rxjs/Rx';
import { EventModel, SessionModel } from "./event.model";

@Injectable()
export class EventService implements OnInit {

    private testTimeout: number = 100;
    private baseSwapioUrl = "http://swapi.co/api/";
    private baseUrl = "http://localhost:54110/api/";
    private tempVar: string = "null";

    _headers = new Headers();

    constructor(private _http: Http)
    {
    } 

    getValues() {
        let sm = this._http.get(this.baseSwapioUrl+"planets/1")
            .map((res: Response) => res.json());
        return sm;
    }

    getEventsOLD(): Observable<EventModel[]>
    {
        let subject = new Subject<EventModel[]>();

        setTimeout(() =>
        {
            subject.next(EVENTS); 
            subject.complete();
        }, 100);
        
        return subject;
    }

    getEvents(): Observable<EventModel[]> {
        return this._http.get(this.baseUrl + "events")
            .map((res:Response) => 
            { 
                return <EventModel[]>res.json(); 
            })
            .catch(this.handleError);
    }

    private handleError(error:Response)
    {
        return Observable.throw(error.statusText);
    }

    getEventOLD(id: number):EventModel {
        return EVENTS.find(x => x.id === id);
    }

    getEvent(id: number):Observable<EventModel> {
        return this._http.get(this.baseUrl + "events/"+ id)
            .map((res:Response) => 
            { 
                return <EventModel>res.json(); 
            })
            .catch(this.handleError);
    }

    saveEvent(event): Observable<EventModel> {
        let headers = new Headers({ "Content-Type" : "application/json"});
        let option = new RequestOptions({headers: headers});

        return this._http.post(this.baseUrl+ "events", JSON.stringify(event), option)
            .map((res: Response) => { return res.json();})
            .catch(this.handleError);
    }

    updateEvent(event): Observable<EventModel> {
        let headers = new Headers({ "Content-Type" : "application/json"});
        let option = new RequestOptions({headers: headers});

        return this._http.put(this.baseUrl+"events/"+event.id, JSON.stringify(event), option)
            .map((res: Response) => { return res.json();})
            .catch(this.handleError);
    }

    searchSessions(searchString: string)
    {
        return this._http.get(this.baseUrl + "session?search="+searchString)
            .map((res:Response) => 
            { 
                return res.json(); 
            })
            .catch(this.handleError);
    } 

    ngOnInit()
    {
    }
}

const EVENTS:EventModel[] = [
    {
        id: 1,
        name: 'Pudge',
        date: new Date('9/26/2036'),
        time: '8:00 am',
        price: '100',
        imageUrl: 'assets/images/dota2heroes/256x144/pudge_full.png',
        location:
        {
            address: 'Mid Point',
            city: 'Dire',
            country: 'Azengard'
        },
        sessions:[
            {
                id:1,
                name:"Mid gank",
                presenter:"IO",
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
        sessions:[
            {
                id:1,
                name:"Mid gank",
                presenter:"IO",
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
          abstract: `Learn all about the new pipes in Angular 4, both 
          how to write them, and how to get the new AI CLI to write 
          them for you. Given by the famous PBD, president of Angular 
          University (formerly Oxford University)`,
          voters: ['bradgreen', 'igorminar', 'martinfowler']
        },
        {
          id: 2,
          name: "Getting the most out of your dev team",
          presenter: "Jeff Cross",
          duration: 1,
          level: "Intermediate",
          abstract: `We all know that our dev teams work hard, but with 
          the right management they can be even more productive, without 
          overworking them. In this session I'll show you how to get the 
          best results from the talent you already have on staff.`,
          voters: ['johnpapa', 'bradgreen', 'igorminar', 'martinfowler']
        },
        {
          id: 3,
          name: "Angular 4 Performance Metrics",
          presenter: "Rob Wormald",
          duration: 2,
          level: "Advanced",
          abstract: `Angular 4 Performance is hot. In this session, we'll see 
          how Angular gets such great performance by preloading data on 
          your users devices before they even hit your site using the 
          new predictive algorithms and thought reading software 
          built into Angular 4.`,
          voters: []
        },
        {
          id: 4,
          name: "Angular 5 Look Ahead",
          presenter: "Brad Green",
          duration: 2,
          level: "Advanced",
          abstract: `Even though Angular 5 is still 6 years away, we all want 
          to know all about it so that we can spend endless hours in meetings 
          debating if we should use Angular 4 or not. This talk will look at 
          Angular 6 even though no code has yet been written for it. We'll 
          look at what it might do, and how to convince your manager to 
          hold off on any new apps until it's released`,
          voters: []
        },
        {
          id: 5,
          name: "Basics of Angular 4",
          presenter: "John Papa",
          duration: 2,
          level: "Beginner",
          abstract: `It's time to learn the basics of Angular 4. This talk 
          will give you everything you need to know about Angular 4 to 
          get started with it today and be building UI's for your self 
          driving cars and butler-bots in no time.`,
          voters: ['bradgreen', 'igorminar']
        }
      ]
    }
]