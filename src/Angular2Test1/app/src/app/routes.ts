﻿import { Routes } from "@angular/router";

import {
EventListComp,
EventDetailComp, 
CreateEventComp,
EventListResolver,
CreateSessionComp,
EventResolver
} from "./event/index";

import { Error404Comp } from "./errors/404.component";

export const appRoutes: Routes =
    [
        {
            path: "events/new",
            component: CreateEventComp,
            canDeactivate: ["canDeactivateCreateEvent"]
        },

        {
            path: "events",
            component: EventListComp,
            resolve: { eventData: EventListResolver }
        },

        {
            path: "events/:id",
            component: EventDetailComp,
            resolve: {event: EventResolver}
        },

        {
            path: "events/session/new",
            component: CreateSessionComp
        },

        { path: "404", component: Error404Comp },
        { path: "", redirectTo: "/events", pathMatch: "full" },
        { path: "user", loadChildren: "app/user/user.module#UserModule"}
    ]