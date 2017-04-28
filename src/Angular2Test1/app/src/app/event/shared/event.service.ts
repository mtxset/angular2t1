import { Injectable, OnInit } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Subject, Observable } from 'rxjs/Rx';
import { EventModel } from "./event.model";

@Injectable()
export class EventService implements OnInit {

    private testTimeout: number = 100;
    private baseSwapioUrl = "http://swapi.co/api/";
    private tempVar: string = "null";
    private handleError: any;

    _headers = new Headers();

    constructor(private _http: Http)
    {
        this.getValues().subscribe(data => this.tempVar = data);
    } 

    getValues() {
        let sm = this._http.get(this.baseSwapioUrl+"planets/1").map((res: Response) => res.json());
        return sm;
    }

    getEvents(): Observable<EventModel[]> {
        let subject = new Subject<EventModel[]>();
        setTimeout(() => { subject.next(EVENTS); subject.complete(); }, this.testTimeout);
        return subject;
    }

    getEvent(id: number):EventModel {
        return EVENTS.find(x => x.id === id);
    }

    saveEvent(event){
        event.id = 999;
        event.session = [];
        EVENTS.push(event);
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
        price: '100 gold',
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
        sessions:[
            {
                id:1,
                name:"Mid gank",
                presenter:"IO",
                duration: 1,
                level: "Ez",
                abstract: "Thether bomb",
            }
        ]
    },
    

]