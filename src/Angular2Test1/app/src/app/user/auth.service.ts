import {Injectable} from "@angular/core";
import { UserModel} from "./user.model";
import { Router } from "@angular/router";
import { Http, Response, Headers, Request, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Injectable()

export class AuthService {

    private baseUrl = "http://localhost:54110/api/";

    constructor (
        private _http: Http,
        private _router: Router) {}

    currentUser:UserModel;
    loginUser (userName: string, pass: string){
        let headers = new Headers({"Content-type":"application/json"});
        let options = new RequestOptions({headers: headers});

        let loginInfo = { username: userName, password: pass};

        return this._http.post(this.baseUrl+"login", JSON.stringify(loginInfo), options)
            .do(res => {
                if (res)
                {
                    this.currentUser = res.json().username;
                }
            }).catch(error =>
            {
                return Observable.of(false);
            });
    }

    isAuthenticated(){
        return !!this.currentUser;
    }

    checkAuthStatus()
    {
        return this._http.get(this.baseUrl+"login/checkuser")
            .map((res: any) =>
            {
                if (res._body)
                    return res.json();
                else
                    return {};
            }).do(user => {
                if (!!user.username){
                    this.currentUser = user.username;
                }
            })
            .subscribe();
    }

    updateCurrentUser(firstName:string, lastName:string){
        this.currentUser.FirstName = firstName;
        this.currentUser.LastName = lastName;
    }

    logout()
    {
        this.currentUser = undefined;
         
        let headers = new Headers({"Content-type":"application/json"});
        let options = new RequestOptions({headers: headers});

        return this._http.post(this.baseUrl + "logout", JSON.stringify({}), options);
    }
}
