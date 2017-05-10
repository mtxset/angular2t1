var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Rx';
var VotersService = (function () {
    function VotersService(_http) {
        this._http = _http;
        this.baseUrl = "http://localhost:54110/api/";
    }
    VotersService.prototype.deleteVoter = function (eventId, session, voterName) {
        session.voters = session.voters.filter(function (voter) { return voter !== voterName; });
        var url = this.baseUrl +
            ("events/" + eventId + "/sessions/" + session.id + "/voters/" + voterName);
        this._http.delete(url)
            .catch(this.handleError)
            .subscribe();
    };
    VotersService.prototype.addVote = function (eventId, session, voterName) {
        session.voters.push(voterName);
        var headers = new Headers({ "Content-Type": "application/json" });
        var option = new RequestOptions({ headers: headers });
        var url = this.baseUrl +
            ("events/" + eventId + "/sessions/" + session.id + "/voters/" + voterName);
        this._http.post(url, JSON.stringify({}), option)
            .map(function (res) { return res.json(); })
            .catch(this.handleError)
            .subscribe();
    };
    VotersService.prototype.userHasVoted = function (session, voterName) {
        return session.voters.some(function (voter) { return voter === voterName; });
    };
    VotersService.prototype.handleError = function (error) {
        return Observable.throw(error.statusText);
    };
    return VotersService;
}());
VotersService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], VotersService);
export { VotersService };
//# sourceMappingURL=C:/dev/Angular2T1/src/Angular2Test1/app/src/app/event/event-details/voters.service.js.map