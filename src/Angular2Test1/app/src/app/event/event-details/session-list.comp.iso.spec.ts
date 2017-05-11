import { SessionListComp } from "./session-list.comp"
import { SessionModel } from "../shared/event.model"

describe("SessionListComp", ()=>
{
    let comp: SessionListComp;
    let mockAuthService, mockVoterService;

    beforeEach(()=>
    {
        comp = new SessionListComp(mockAuthService, mockVoterService);
    })

    describe("ngOnChanges", () => 
    {
        it("should filter the sessions correctly", () => 
        {
            comp.sessions = 
            <SessionModel[]>[
                {name: "session1", level: "Intermediate"},
                {name: "session2", level: "Intermediate"},
                {name: "session3", level: "Beginner"}
            ];

            comp.filterBy = "4k";
            comp.sortBy = "name";
            comp.eventId = 3;

            comp.ngOnChanges();

            expect(comp.filtredSession.length).toBe(2);
        });

        it("should filter the sessions correctly", () => 
        {
            comp.sessions = 
            <SessionModel[]>[
                {name: "session1", level: "Intermediate"},
                {name: "session3", level: "Intermediate"},
                {name: "session2", level: "Beginner"}
            ];

            comp.filterBy = "all";
            comp.sortBy = "name";
            comp.eventId = 3;

            comp.ngOnChanges();

            expect(comp.filtredSession[2].name).toBe("session3");
        });
    });
})