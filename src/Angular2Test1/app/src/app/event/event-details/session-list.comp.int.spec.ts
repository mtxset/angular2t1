import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { DebugElement, Component, NO_ERRORS_SCHEMA } from "@angular/core";
import { By } from "@angular/platform-browser";

import { SessionListComp } from "./session-list.comp";
import { SessionModel } from "../shared/event.model";
import { AuthService } from "../../user/auth.service";
import { VotersService } from "./voters.service";
import { UpvoteComp } from "./upvote.comp"
import { DurationPipe } from "../shared/duration.pipe"
import { CollapsibleWellComp } from "../../common/collapsible-well.comp"



describe("SessionListComp", () =>
{
    let fixture: ComponentFixture<SessionListComp>,
        comp: SessionListComp,
        element: HTMLElement,
        debugEl: DebugElement;

    beforeEach(async( () => 
    {
        let mockAuthService = 
        {
            isAuthenticated: () => true,
            currentUser: { userName: "gg"}
        };
        let mockVoterService = 
        {
            userHasVoted: () => true
        };

        TestBed.configureTestingModule({
            imports: [],
            declarations: 
            [
                SessionListComp,
                //UpvoteComp,
                DurationPipe,
                //CollapsibleWellComp
            ],
            providers:
            [
                { provide: AuthService, useValue: mockAuthService },
                { provide: VotersService, useValue: mockVoterService }
            ],
            schemas: 
            [
                NO_ERRORS_SCHEMA
            ]
        }).compileComponents(); // Do I need it?
    }))

    beforeEach(()=>
    {
        fixture = TestBed.createComponent(SessionListComp);
        comp = fixture.componentInstance;
        debugEl = fixture.debugElement;
        element = fixture.nativeElement;
    });

    describe("Initial display", () =>
    {
        it("should have correct session title", ()=>
        {
            comp.sessions = 
            [{
                id: 3, name: "session1", presenter: "Joe", duration: 1, level:"Beginner",
                abstract: "description", voters: ["john", "bob"]
            }];
            comp.filterBy = "all"; 
            comp.sortBy = "name";
            comp.eventId = 4;

            comp.ngOnChanges();
            fixture.detectChanges();

            expect(element.querySelector("[well-title]").textContent)
                .toContain("session1");

            expect(debugEl.query(By.css("[well-title]")).nativeElement.textContent)
                .toContain("session1");
        })
    });
})