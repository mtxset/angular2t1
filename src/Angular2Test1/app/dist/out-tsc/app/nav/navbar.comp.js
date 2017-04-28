var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { AuthService } from "../user/auth.service";
var NavBarComp = (function () {
    function NavBarComp(_authService) {
        this._authService = _authService;
    }
    return NavBarComp;
}());
NavBarComp = __decorate([
    Component({
        selector: 'nav-bar',
        templateUrl: './navbar.comp.html',
        styleUrls: ["./navbar.comp.css"]
    }),
    __metadata("design:paramtypes", [AuthService])
], NavBarComp);
export { NavBarComp };
//# sourceMappingURL=C:/dev/Angular2T1/src/Angular2Test1/app/src/app/nav/navbar.comp.js.map