import { Component, Input, OnChanges } from "@angular/core";
import { SessionModel } from "../shared/index";

@Component({
    selector: "session-list",
    templateUrl: "./session-list.comp.html"
})

export class SessionListComp implements OnChanges { 
    @Input() sessions: SessionModel[];
    @Input() filterBy: string;
    @Input() sortBy: string;
    filtredSession: SessionModel[] = [];

    ngOnChanges()
    {
        if (!this.sessions) return;

        this.filterSessions(this.filterBy);
        this.sortBy === "name" ? this.filtredSession.sort(sortByNameAsc) :
            this.filtredSession.sort(sortByVotesDesc);
    }

    filterSessions(filter)
    {
        if (filter === "all")
        {
            this.filtredSession = this.sessions.slice(0);
        }
        else 
        {
            this.filtredSession = this.sessions.filter(
                data => 
                { 
                    return data.level.toString() === this.convertFilter(filter) 
                }
            )
        }
    }

    convertFilter(filter):string
    {
        switch (filter)
        {
            case "3k": return "Beginner";
            case "4k": return "Intermediate";
            case "5k": return "Advanced";
            default: return "Beginner";
        }
    }
}

function sortByNameAsc(s1: SessionModel, s2: SessionModel)
{
    if (s1.name > s2.name) return 1;
    else if (s1.name === s2.name) return 0;
    else return -1;
}

function sortByVotesDesc(s1: SessionModel, s2: SessionModel)
{
    return s2.voters.length - s1.voters.length;
}