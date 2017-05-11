import { CreateEventComp } from "./event/index";

export function checkDirtyState (component: CreateEventComp)
{
    if (component.isDirty)
    {
        return window.confirm("You have not saved.");
    }
    return true;
}