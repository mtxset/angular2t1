var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { userRoutes } from "./user.routes";
import { ProfileComp } from "./profile.comp";
import { LoginComp } from "./login.comp";
var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule.forChild(userRoutes),
            FormsModule,
            ReactiveFormsModule
        ],
        declarations: [
            ProfileComp,
            LoginComp
        ],
        providers: []
    })
], UserModule);
export { UserModule };
//# sourceMappingURL=C:/dev/Angular2T1/src/Angular2Test1/app/src/app/user/user.module.js.map