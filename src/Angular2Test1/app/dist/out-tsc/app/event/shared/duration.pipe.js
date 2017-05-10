var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from "@angular/core";
var DurationPipe = (function () {
    function DurationPipe() {
    }
    DurationPipe.prototype.transform = function (value) {
        switch (value) {
            case 1: return "Half hour";
            case 2: return "One hour";
            case 3: return "Half day";
            case 4: return "Full day";
            default: return value.toString();
        }
    };
    return DurationPipe;
}());
DurationPipe = __decorate([
    Pipe({ name: "duration" })
], DurationPipe);
export { DurationPipe };
//# sourceMappingURL=C:/dev/Angular2T1/src/Angular2Test1/app/src/app/event/shared/duration.pipe.js.map