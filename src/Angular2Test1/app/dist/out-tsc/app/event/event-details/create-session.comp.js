var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ResitrectedWords } from "../shared/index";
var CreateSessionComp = (function () {
    function CreateSessionComp() {
        this.saveNewSession = new EventEmitter();
        this.cancelAddSession = new EventEmitter();
    }
    CreateSessionComp.prototype.ngOnInit = function () {
        this.name = new FormControl("", Validators.required);
        this.presenter = new FormControl("", Validators.required);
        this.duration = new FormControl("", Validators.required);
        this.level = new FormControl("", Validators.required);
        this.abstract = new FormControl("", [
            Validators.required,
            ResitrectedWords(["fudge", "fag"])
        ]);
        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        });
    };
    CreateSessionComp.prototype.saveSession = function (formValues) {
        var session = {
            id: undefined,
            name: formValues.name,
            duration: formValues.duration,
            presenter: formValues.presenter,
            level: formValues.level,
            abstract: formValues.abstract,
            voters: []
        };
        this.saveNewSession.emit(session);
    };
    CreateSessionComp.prototype.cancel = function () {
        this.cancelAddSession.emit();
    };
    return CreateSessionComp;
}());
__decorate([
    Output(),
    __metadata("design:type", Object)
], CreateSessionComp.prototype, "saveNewSession", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CreateSessionComp.prototype, "cancelAddSession", void 0);
CreateSessionComp = __decorate([
    Component({
        selector: "create-session",
        templateUrl: "./create-session.comp.html",
        styles: [
            "em {float: right; color: #e05c65; padding-left: 10px",
            ".error input, .error select, .error textarea {background-color: #e3c3c5;}",
            ".error ::-webkit-input-placeholder {color : #999;}",
            ".error ::-moz-placeholder {color : #999;}",
            ".error :moz-placeholder {color : #999;}"
        ]
    })
], CreateSessionComp);
export { CreateSessionComp };
//# sourceMappingURL=C:/dev/Angular2T1/src/Angular2Test1/app/src/app/event/event-details/create-session.comp.js.map