import { Injectable, OnInit, EventEmitter } from "@angular/core";
import { Http, Response, Headers, Request, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { EventModel, SessionModel } from "./event.model";

@Injectable()
export class EventService implements OnInit {

    private testTimeout = 100;
    private baseSwapioUrl = "http://swapi.co/api/";
    private baseUrl = "http://localhost:54110/api/";
    private tempVar = "null";

    _headers = new Headers();

    constructor(private _http: Http)
    {
    }

    getValues() {
        const sm = this._http.get(this.baseSwapioUrl + "planets/1")
            .map((res: Response) => res.json());
        return sm;
    }

    getEvents(): Observable<EventModel[]> {
        return this._http.get(this.baseUrl + "events")
            .map((res: Response) =>
            {
                return <EventModel[]>res.json();
            })
            .catch(this.handleError);
    }

    private handleError(error: Response)
    {
        return Observable.throw(error.statusText);
    }

    getEvent(id: number): Observable<EventModel> {
        return this._http.get(this.baseUrl + "events/" + id)
            .map((res: Response) =>
            {
                return <EventModel>res.json();
            })
            .catch(this.handleError);
    }

    saveEvent(event): Observable<EventModel> {
        const headers = new Headers({ "Content-Type" : "application/json"});
        const option = new RequestOptions({headers: headers});

        return this._http.post(this.baseUrl + "events", JSON.stringify(event), option)
            .map((res: Response) => { return res.json(); })
            .catch(this.handleError);
    }

    updateEvent(event): Observable<EventModel> {
        const headers = new Headers({ "Content-Type" : "application/json"});
        const option = new RequestOptions({headers: headers});

        return this._http.put(this.baseUrl + "events/" + event.id, JSON.stringify(event), option)
            .map((res: Response) => { return res.json(); })
            .catch(this.handleError);
    }

    searchSessions(searchString: string)
    {
        return this._http.get(this.baseUrl + "session?search=" + searchString)
            .map((res: Response) =>
            {
                return res.json();
            })
            .catch(this.handleError);
    }

    ngOnInit()
    {
    }
}