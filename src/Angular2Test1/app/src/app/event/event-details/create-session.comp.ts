import { Component} from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { SessionModel } from "../shared/event.model";

@Component({
    templateUrl: "./create-session.comp.html",
    styles:["em {float: right; color: #e05c65; padding-left: 10px",
        ".error input, .error select, .error textarea {background-color: #e3c3c5;}",
        ".error ::-webkit-input-placeholder {color : #999;}",
        ".error ::-moz-placeholder {color : #999;}",
        ".error :moz-placeholder {color : #999;}"]
})

export class CreateSessionComp{

    name: FormControl;
    presenter: FormControl;
    duration: FormControl;
    level: FormControl;
    abstract: FormControl;

    newSessionForm: FormGroup;

    ngOnInit()
    {
        this.name = new FormControl("", Validators.required);
        this.presenter = new FormControl("", Validators.required);
        this.duration = new FormControl("", Validators.required);
        this.level = new FormControl("", Validators.required);
        this.abstract = new FormControl("", Validators.required);

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        })
    }

    saveSession(formValues)
    {
        let session: SessionModel = {
            id: undefined,
            name: formValues.name,
            duration: formValues.duration,
            presenter: formValues.presenter,
            level: formValues.level,
            abstract: formValues.abstract,
            voters: undefined
        }

        console.log(session);
    }

}