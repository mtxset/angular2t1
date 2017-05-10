var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Inject } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { ToastrService } from "../common/toastr.service";
var ProfileComp = (function () {
    function ProfileComp(_authService, _router, _toastr) {
        this._authService = _authService;
        this._router = _router;
        this._toastr = _toastr;
    }
    ProfileComp.prototype.ngOnInit = function () {
        this.firstNameFC = new FormControl(this._authService.currentUser.FirstName, [
            Validators.required,
            Validators.pattern('[a-zA-Z].*')
        ]);
        this.lastNameFC = new FormControl(this._authService.currentUser.LastName, Validators.required);
        this.profileForm = new FormGroup({
            firstName: this.firstNameFC,
            lastName: this.lastNameFC
        });
    };
    ProfileComp.prototype.cancel = function () {
        this._router.navigate(['events']);
    };
    ProfileComp.prototype.logout = function () {
        var _this = this;
        this._authService.logout().subscribe(function () {
            _this._router.navigate(["/user/login"]);
        });
    };
    ProfileComp.prototype.saveProfile = function (profileForm) {
        if (this.profileForm.invalid)
            return;
        this._authService.updateCurrentUser(profileForm.firstName, profileForm.lastName);
        this._toastr.info("Profiled saved. GG");
    };
    ProfileComp.prototype.validateLastName = function () {
        return (this.lastNameFC.valid || this.lastNameFC.untouched);
    };
    ProfileComp.prototype.validateFirstName = function () {
        return (this.firstNameFC.valid || this.firstNameFC.untouched);
    };
    return ProfileComp;
}());
ProfileComp = __decorate([
    Component({
        templateUrl: "./profile.comp.html",
        styles: ["em {float: right; color: #e05c65; padding-left: 10px",
            ".error input {background-color: #e3c3c5;}",
            ".error ::-webkit-input-placeholder {color : #999;}",
            ".error ::-moz-placeholder {color : #999;}",
            ".error :moz-placeholder {color : #999;}"]
    }),
    __param(2, Inject(ToastrService)),
    __metadata("design:paramtypes", [AuthService,
        Router, Object])
], ProfileComp);
export { ProfileComp };
//# sourceMappingURL=C:/dev/Angular2T1/src/Angular2Test1/app/src/app/user/profile.comp.js.map