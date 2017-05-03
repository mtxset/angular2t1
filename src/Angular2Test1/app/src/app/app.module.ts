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
CreateSessionComp,
SessionListComp,
DurationPipe
} from "./event/index";

import { 
    ToastrService, 
    IToastr, 
    JQueryService,
    CollapsibleWellComp,
    SimpleModalComp,
    ModalTriggerDirective
 } from "./common/index";
    
declare let toastr : IToastr;
declare let jQuery : Object;

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
      SessionListComp,
      Error404Comp,
      CollapsibleWellComp,
      DurationPipe,
      SimpleModalComp,
      ModalTriggerDirective
    ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],

  providers: 
  [
      EventService,
      EventRouteActivator,
      {  
          provide: "canDeactivateCreateEvent",
          useValue: checkDirtyState
      },
      EventListResolver,
      { provide: AuthService, useClass: AuthService },
      { provide: ToastrService, useValue: toastr},
      { provide: JQueryService, useValue: jQuery}
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

function checkDirtyState(component: CreateEventComp)
{
    if (component.isDirty)
        return window.confirm("You have not saved.");

    return true;
}