import {Component} from "@angular/core";
import {AuthService} from "./auth.service";
import { Router} from "@angular/router";

@Component({
    templateUrl: "./login.comp.html",
    styles: ["em { float:right; color: #E05C65; padding-left:10px;}"]
})

export class LoginComp{
    loginInvalid = false;

    constructor (
        private _authService: AuthService,
        private _router: Router) 
    {}

    login(formValues)
    {
        this._authService.loginUser(formValues.userName, formValues.password)
            .subscribe(res => 
            { 
                if (!res) 
                    this.loginInvalid = true;
                else
                    this._router.navigate(['events']);
            })
    }

    cancel(){
        this._router.navigate(['events']);
    }
}