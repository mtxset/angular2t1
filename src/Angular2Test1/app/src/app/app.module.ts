import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

import {  AppComponent } from './app.component';

import {
EventListComp,
EventThumbComp,
EventDetailComp,
CreateEventComp,
EventRouteActivator,
EventListResolver,
CreateSessionComp
} from "./event/index";

import { NavBarComp } from "./nav/navbar.comp";
import { Error404Comp } from "./errors/404.component";
import { EventService } from "./event/shared/event.service";
import { appRoutes } from "./routes";
import { AuthService } from "./user/auth.service";

@NgModule({
  declarations: [
      AppComponent,
      EventListComp,
      EventThumbComp,
      NavBarComp,
      EventDetailComp,
      CreateEventComp,
      CreateSessionComp,
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
      AuthService],

  bootstrap: [AppComponent]
})
export class AppModule { }

function checkDirtyState(component: CreateEventComp)
{
    if (component.isDirty)
        return window.confirm("You have not saved.");

    return true;
}
