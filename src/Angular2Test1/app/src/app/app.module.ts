import "./rxjs-extensions";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";

import {
EventListComp,
EventThumbComp,
EventDetailComp,
CreateEventComp,
EventResolver,
EventListResolver,
CreateSessionComp,
SessionListComp,
DurationPipe,
UpvoteComp,
VotersService,
LocationValidator,
} from "./event/index";

import {
    ToastrService,
    IToastr,
    JQueryService,
    CollapsibleWellComp,
    SimpleModalComp,
    ModalTriggerDirective
 } from "./common/index";


let toastr: IToastr =  window["toastr"];
let jQuery: Object = window["$"];

import { NavBarComp } from "./nav/navbar.comp";
import { Error404Comp } from "./errors/404.component";
import { EventService } from "./event/shared/event.service";
import { appRoutes } from "./routes";
import { AuthService } from "./user/auth.service";

import { checkDirtyState } from "./check-dirty-state.func";

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
      ModalTriggerDirective,
      UpvoteComp,
      LocationValidator
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
      VotersService,
      EventResolver,
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



