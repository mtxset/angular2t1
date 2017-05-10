import { VotersService } from "./voters.service"
import { SessionModel } from "../shared/event.model"
import { Observable } from "rxjs/Rx"

describe("VoterService", () => {

    let voterService: VotersService, mockHttp;
    let baseUrl = "http://localhost:54110/api/";

    beforeEach(() => { 
        mockHttp = jasmine.createSpyObj("mockHttp", ["delete", "post"]);
        voterService = new VotersService(mockHttp);
    })

    describe("deleteVoter", ()=> 
    {
        it("should remove the voter from the list of voters", () =>
        {
             var session = { id: 6, voters: ["joe", "john"]};
             mockHttp.delete.and.returnValue(Observable.of(false));

             voterService.deleteVoter(3, <SessionModel>session, "joe");

             expect(session.voters.length).toBe(1);
             expect(session.voters[0]).toContain("john");
        });

        it("should call http.delete with the right URL", () =>
        {
             var session = { id: 6, voters: ["joe", "john"]};
             mockHttp.delete.and.returnValue(Observable.of(false));

             voterService.deleteVoter(3, <SessionModel>session, "joe");

             expect(mockHttp.delete)
                .toHaveBeenCalledWith(baseUrl+"events/3/sessions/6/voters/joe");
        });
    });

    describe("addVote", ()=>
    {
        it("should call http.post with the right URL", () =>
        {
             var session = { id: 6, voters: ["john"]};
             mockHttp.post.and.returnValue(Observable.of(false));

             voterService.addVote(3, <SessionModel>session, "joe");

             expect(mockHttp.post)
                .toHaveBeenCalledWith(
                    baseUrl+"events/3/sessions/6/voters/joe", "{}", jasmine.any(Object));
        });
    });
    
}) 