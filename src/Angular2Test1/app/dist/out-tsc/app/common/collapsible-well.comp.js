var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from "@angular/core";
var CollapsibleWellComp = (function () {
    function CollapsibleWellComp() {
        this.visible = true;
    }
    CollapsibleWellComp.prototype.toggleData = function () {
        this.visible = !this.visible;
    };
    return CollapsibleWellComp;
}());
CollapsibleWellComp = __decorate([
    Component({
        selector: "collapsible-well",
        template: " \n    <div (click)=\"toggleData()\" class=\"well pointable\"> \n        <h4>\n            <ng-content select=\"[well-title]\"></ng-content>\n        </h4>\n        <ng-content select=\"[well-body]\" *ngIf=\"visible\">\n        </ng-content>\n    </div>"
    })
], CollapsibleWellComp);
export { CollapsibleWellComp };
//# sourceMappingURL=C:/dev/Angular2T1/src/Angular2Test1/app/src/app/common/collapsible-well.comp.js.map