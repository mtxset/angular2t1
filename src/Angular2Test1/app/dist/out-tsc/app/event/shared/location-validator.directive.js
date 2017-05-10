var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Directive } from "@angular/core";
import { NG_VALIDATORS } from "@angular/forms";
var LocationValidator = LocationValidator_1 = (function () {
    function LocationValidator() {
    }
    LocationValidator.prototype.validate = function (formGroup) {
        var addrControl = formGroup.controls["address"];
        var cityControl = formGroup.controls["city"];
        var countryControl = formGroup.controls["country"];
        var onlineUrlControl = formGroup.root.controls["onlineUrl"];
        if ((addrControl && addrControl.value) &&
            (cityControl && cityControl.value) &&
            (countryControl && countryControl.value)
            || (onlineUrlControl && onlineUrlControl.value)) {
            return null;
        }
        else {
            return { validateLocation: false };
        }
    };
    return LocationValidator;
}());
LocationValidator = LocationValidator_1 = __decorate([
    Directive({
        selector: "[validateLocation]",
        providers: [{ provide: NG_VALIDATORS, useExisting: LocationValidator_1, multi: true }]
    })
], LocationValidator);
export { LocationValidator };
var LocationValidator_1;
//# sourceMappingURL=C:/dev/Angular2T1/src/Angular2Test1/app/src/app/event/shared/location-validator.directive.js.map