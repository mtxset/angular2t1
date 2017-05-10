import { Component, OnInit, Inject } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { ToastrService, IToastr } from "../common/toastr.service";

@Component({
    templateUrl:"./profile.comp.html",
    styles:["em {float: right; color: #e05c65; padding-left: 10px",
    ".error input {background-color: #e3c3c5;}",
    ".error ::-webkit-input-placeholder {color : #999;}",
    ".error ::-moz-placeholder {color : #999;}",
    ".error :moz-placeholder {color : #999;}"]
})

export class ProfileComp implements OnInit {

    constructor (
        private _authService: AuthService, 
        private _router: Router,
        @Inject(ToastrService) private _toastr) {}
        // to enable intellisense: private _toastr:IToastr but shows warnings

    profileForm: FormGroup;
    private firstNameFC: FormControl;
    private lastNameFC: FormControl; 

    ngOnInit()
    {
        this.firstNameFC = new FormControl(
            this._authService.currentUser.FirstName,
            [
                Validators.required,
                Validators.pattern('[a-zA-Z].*')
            ]);

        this.lastNameFC = new FormControl(
            this._authService.currentUser.LastName,
            Validators.required);

        this.profileForm = new FormGroup({
            firstName: this.firstNameFC,
            lastName: this.lastNameFC
        });
    }

    cancel()
    {
        this._router.navigate(['events']);
    }

    logout()
    {
        this._authService.logout().subscribe(() => {
            this._router.navigate(["/user/login"])
        });
    }

    saveProfile(profileForm)
    {
        if (this.profileForm.invalid)
            return;

        this._authService.updateCurrentUser(profileForm.firstName, profileForm.lastName);
        this._toastr.info("Profiled saved. GG");
    }

    validateLastName(){
        return (this.lastNameFC.valid || this.lastNameFC.untouched);
    }

    validateFirstName(){
        return (this.firstNameFC.valid || this.firstNameFC.untouched);
    }
}