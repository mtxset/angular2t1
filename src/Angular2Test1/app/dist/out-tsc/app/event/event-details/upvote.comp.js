var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Input, Output } from "@angular/core";
var UpvoteComp = (function () {
    function UpvoteComp() {
        this.vote = new EventEmitter();
    }
    Object.defineProperty(UpvoteComp.prototype, "voted", {
        set: function (val) {
            this.iconColor = val ? "blue" : "gray";
        },
        enumerable: true,
        configurable: true
    });
    UpvoteComp.prototype.onClick = function () {
        this.vote.emit({});
    };
    return UpvoteComp;
}());
__decorate([
    Input(),
    __metadata("design:type", Number)
], UpvoteComp.prototype, "count", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], UpvoteComp.prototype, "vote", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], UpvoteComp.prototype, "voted", null);
UpvoteComp = __decorate([
    Component({
        selector: "upvote",
        styleUrls: ["./upvote.comp.css"],
        templateUrl: "./upvote.comp.html"
    })
], UpvoteComp);
export { UpvoteComp };
//# sourceMappingURL=C:/dev/Angular2T1/src/Angular2Test1/app/src/app/event/event-details/upvote.comp.js.map