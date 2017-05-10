import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
    selector: "upvote",
    styleUrls: ["./upvote.comp.css"],
    templateUrl: "./upvote.comp.html"
})

export class UpvoteComp {
    @Input() count: number;
    @Output() vote = new EventEmitter();
    iconColor: string;

    @Input() set voted(val) 
    {
        this.iconColor = val ? "blue" : "gray";
    }

    onClick()
    {
        this.vote.emit({});
    }
}