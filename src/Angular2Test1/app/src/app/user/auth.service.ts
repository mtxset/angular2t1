import {Injectable} from "@angular/core";
import { UserModel} from "./user.model";
import { Router } from "@angular/router";

@Injectable()

export class AuthService {

    constructor (private _router: Router) {}

    currentUser:UserModel;
    loginUser (userName: string, pass: string){
        this.currentUser = {
            Id: 1,
            UserName: userName,
            FirstName: "GG",
            LastName: "WP"
        }
    }

    isAuthenticated(){
        return !!this.currentUser;
    }

    updateCurrentUser(firstName:string, lastName:string){
        this.currentUser.FirstName = firstName;
        this.currentUser.LastName = lastName;
    }
}
