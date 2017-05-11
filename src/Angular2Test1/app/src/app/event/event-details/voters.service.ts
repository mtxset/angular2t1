import { Injectable, OnInit, EventEmitter } from "@angular/core";
import { Http, Response, Headers, Request, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { EventModel, SessionModel } from "../shared/event.model";

@Injectable()
export class VotersService{
    
    private baseUrl = "http://localhost:54110/api/";
    
    constructor(private _http: Http)
    {
    } 

    deleteVoter(eventId:number, session: SessionModel, voterName: string)
    {
        session.voters = session.voters.filter(voter => voter !== voterName);

        let url = this.baseUrl + 
            `events/${eventId}/sessions/${session.id}/voters/${voterName}`;
        this._http.delete(url)
            .catch(this.handleError)
            .subscribe();
    }

    addVote(eventId:number, session: SessionModel, voterName: string)
    {
        session.voters.push(voterName);

        let headers = new Headers({ "Content-Type" : "application/json"});
        let option = new RequestOptions({headers: headers});

        let url = this.baseUrl + 
            `events/${eventId}/sessions/${session.id}/voters/${voterName}`;

        this._http.post(url, JSON.stringify({}), option)
            .catch(this.handleError)
            .subscribe();
    }

    userHasVoted(session: SessionModel, voterName:string)
    {
        return session.voters.some(voter => voter === voterName);
    }

    private handleError(error:Response)
    {
        return Observable.throw(error.statusText);
    }
}