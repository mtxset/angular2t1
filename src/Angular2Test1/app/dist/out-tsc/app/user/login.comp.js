var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
var LoginComp = (function () {
    function LoginComp(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    LoginComp.prototype.login = function (formValues) {
        this._authService.loginUser(formValues.userName, formValues.password);
        this._router.navigate(['events']);
    };
    LoginComp.prototype.cancel = function () {
        this._router.navigate(['events']);
    };
    return LoginComp;
}());
LoginComp = __decorate([
    Component({
        templateUrl: "./login.comp.html",
        styles: ["em { float:right; color: #E05C65; padding-left:10px;}"]
    }),
    __metadata("design:paramtypes", [AuthService,
        Router])
], LoginComp);
export { LoginComp };
//# sourceMappingURL=C:/dev/Angular2T1/src/Angular2Test1/app/src/app/user/login.comp.js.map