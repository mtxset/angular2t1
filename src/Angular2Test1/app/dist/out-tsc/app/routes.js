import { EventListComp, EventDetailComp, CreateEventComp, EventRouteActivator, EventListResolver } from "./event/index";
import { Error404Comp } from "./errors/404.component";
export var appRoutes = [
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
        canActivate: [EventRouteActivator]
    },
    { path: "404", component: Error404Comp },
    { path: "", redirectTo: "/events", pathMatch: "full" },
    { path: "user", loadChildren: "app/user/user.module#UserModule" }
];
//# sourceMappingURL=C:/dev/Angular2T1/src/Angular2Test1/app/src/app/routes.js.map