var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Input, Inject, ViewChild, ElementRef } from "@angular/core";
import { JQueryService } from "./jQuery.service";
var SimpleModalComp = (function () {
    function SimpleModalComp($) {
        this.$ = $;
    }
    SimpleModalComp.prototype.closeModal = function () {
        if (this.closeOnBodyClick.toLocaleLowerCase() === "true")
            this.$(this.containerEl.nativeElement).modal('hide');
    };
    return SimpleModalComp;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], SimpleModalComp.prototype, "title", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SimpleModalComp.prototype, "elementId", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SimpleModalComp.prototype, "closeOnBodyClick", void 0);
__decorate([
    ViewChild("modalcontainer"),
    __metadata("design:type", ElementRef)
], SimpleModalComp.prototype, "containerEl", void 0);
SimpleModalComp = __decorate([
    Component({
        selector: "simple-modal",
        template: "\n    <div id=\"{{elementId}}\" #modalcontainer class=\"modal fade\" tabindex=\"-1\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\"\n                        data-dismiss=\"modal\"><span>&times;</span>\n                    </button>\n                    <h4 class=\"modal-title\">{{title}}</h4>\n                </div>\n\n                <div class=\"modal-body\" (click)=\"closeModal()\">\n                    <ng-content>\n\n                    </ng-content>\n                </div>\n\n            </div>\n        </div>\n    </div>\n    ",
        styles: [".modal-body { height: 250px; overflow-y: scroll; } "]
    }),
    __param(0, Inject(JQueryService)),
    __metadata("design:paramtypes", [Object])
], SimpleModalComp);
export { SimpleModalComp };
//# sourceMappingURL=C:/dev/Angular2T1/src/Angular2Test1/app/src/app/common/simple-modal.comp.js.map