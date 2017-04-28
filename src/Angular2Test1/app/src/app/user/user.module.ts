import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { userRoutes} from "./user.routes";
import { ProfileComp } from "./profile.comp";
import { LoginComp } from "./login.comp";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(userRoutes),
        FormsModule,
        ReactiveFormsModule
    ],
    
    declarations: [
        ProfileComp,
        LoginComp
    ],
    
    providers: [

    ]
})

export class UserModule { }