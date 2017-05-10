var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
var Error404Comp = (function () {
    function Error404Comp() {
    }
    return Error404Comp;
}());
Error404Comp = __decorate([
    Component({
        template: "\n    <h1 class=\"errorMessage\">404'd</h1>\n  ",
        styles: ["\n    .errorMessage { \n      margin-top:150px; \n      font-size: 170px;\n      text-align: center; \n    }"]
    }),
    __metadata("design:paramtypes", [])
], Error404Comp);
export { Error404Comp };
//# sourceMappingURL=C:/dev/Angular2T1/src/Angular2Test1/app/src/app/errors/404.component.js.map