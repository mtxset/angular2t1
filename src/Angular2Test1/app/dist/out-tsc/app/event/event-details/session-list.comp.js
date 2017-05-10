var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from "@angular/core";
import { AuthService } from "../../user/auth.service";
import { VotersService } from "./voters.service";
var SessionListComp = (function () {
    function SessionListComp(_authService, _votersService) {
        this._authService = _authService;
        this._votersService = _votersService;
        this.filtredSession = [];
    }
    SessionListComp.prototype.ngOnChanges = function () {
        if (!this.sessions)
            return;
        this.filterSessions(this.filterBy);
        this.sortBy === "name" ? this.filtredSession.sort(sortByNameAsc) :
            this.filtredSession.sort(sortByVotesDesc);
    };
    SessionListComp.prototype.toggleVote = function (session) {
        if (this.userHasVoted(session)) {
            this._votersService.deleteVoter(this.eventId, session, this._authService.currentUser.UserName);
        }
        else {
            this._votersService.addVote(this.eventId, session, this._authService.currentUser.UserName);
        }
        if (this.sortBy === "votes") {
            this.filtredSession.sort(sortByVotesDesc);
        }
    };
    SessionListComp.prototype.userHasVoted = function (session) {
        return this._votersService.userHasVoted(session, this._authService.currentUser.UserName);
    };
    SessionListComp.prototype.filterSessions = function (filter) {
        var _this = this;
        if (filter === "all") {
            this.filtredSession = this.sessions.slice(0);
        }
        else {
            this.filtredSession = this.sessions.filter(function (data) {
                return data.level.toString() === _this.convertFilter(filter);
            });
        }
    };
    SessionListComp.prototype.convertFilter = function (filter) {
        switch (filter) {
            case "3k": return "Beginner";
            case "4k": return "Intermediate";
            case "5k": return "Advanced";
            default: return "Beginner";
        }
    };
    return SessionListComp;
}());
__decorate([
    Input(),
    __metadata("design:type", Array)
], SessionListComp.prototype, "sessions", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SessionListComp.prototype, "filterBy", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SessionListComp.prototype, "sortBy", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SessionListComp.prototype, "eventId", void 0);
SessionListComp = __decorate([
    Component({
        selector: "session-list",
        templateUrl: "./session-list.comp.html"
    }),
    __metadata("design:paramtypes", [AuthService,
        VotersService])
], SessionListComp);
export { SessionListComp };
function sortByNameAsc(s1, s2) {
    if (s1.name > s2.name)
        return 1;
    else if (s1.name === s2.name)
        return 0;
    else
        return -1;
}
function sortByVotesDesc(s1, s2) {
    return s2.voters.length - s1.voters.length;
}
//# sourceMappingURL=C:/dev/Angular2T1/src/Angular2Test1/app/src/app/event/event-details/session-list.comp.js.map