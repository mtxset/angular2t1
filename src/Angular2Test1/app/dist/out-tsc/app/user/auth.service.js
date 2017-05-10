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
import { Router } from "@angular/router";
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Rx';
var AuthService = (function () {
    function AuthService(_http, _router) {
        this._http = _http;
        this._router = _router;
        this.baseUrl = "http://localhost:54110/api/";
    }
    AuthService.prototype.loginUser = function (userName, pass) {
        var _this = this;
        var headers = new Headers({ "Content-type": "application/json" });
        var options = new RequestOptions({ headers: headers });
        var loginInfo = { username: userName, password: pass };
        return this._http.post(this.baseUrl + "login", JSON.stringify(loginInfo), options)
            .do(function (res) {
            if (res) {
                _this.currentUser = res.json().username;
            }
        }).catch(function (error) {
            return Observable.of(false);
        });
    };
    AuthService.prototype.isAuthenticated = function () {
        return !!this.currentUser;
    };
    AuthService.prototype.checkAuthStatus = function () {
        var _this = this;
        return this._http.get(this.baseUrl + "login/checkuser")
            .map(function (res) {
            if (res._body)
                return res.json();
            else
                return {};
        }).do(function (user) {
            if (!!user.username) {
                _this.currentUser = user.username;
                console.log(user);
            }
        })
            .subscribe();
    };
    AuthService.prototype.updateCurrentUser = function (firstName, lastName) {
        this.currentUser.FirstName = firstName;
        this.currentUser.LastName = lastName;
    };
    AuthService.prototype.logout = function () {
        this.currentUser = undefined;
        var headers = new Headers({ "Content-type": "application/json" });
        var options = new RequestOptions({ headers: headers });
        return this._http.post(this.baseUrl + "logout", JSON.stringify({}), options);
    };
    return AuthService;
}());
AuthService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http,
        Router])
], AuthService);
export { AuthService };
//# sourceMappingURL=C:/dev/Angular2T1/src/Angular2Test1/app/src/app/user/auth.service.js.map