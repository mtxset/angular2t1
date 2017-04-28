var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { EventListComp, EventThumbComp, EventDetailComp, CreateEventComp, EventRouteActivator, EventListResolver } from "./event/index";
import { NavBarComp } from "./nav/navbar.comp";
import { Error404Comp } from "./errors/404.component";
import { EventService } from "./event/shared/event.service";
import { appRoutes } from "./routes";
import { AuthService } from "./user/auth.service";
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            EventListComp,
            EventThumbComp,
            NavBarComp,
            EventDetailComp,
            CreateEventComp,
            Error404Comp
        ],
        imports: [
            BrowserModule,
            FormsModule,
            HttpModule,
            ReactiveFormsModule,
            RouterModule.forRoot(appRoutes)
        ],
        providers: [
            EventService,
            EventRouteActivator,
            {
                provide: "canDeactivateCreateEvent",
                useValue: checkDirtyState
            },
            EventListResolver,
            AuthService
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
function checkDirtyState(component) {
    if (component.isDirty)
        return window.confirm("You have not saved.");
    return true;
}
//# sourceMappingURL=C:/dev/Angular2T1/src/Angular2Test1/app/src/app/app.module.js.map