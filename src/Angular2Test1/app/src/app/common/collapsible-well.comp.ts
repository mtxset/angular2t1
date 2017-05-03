import {Component, Input} from "@angular/core";


@Component({
    selector: "collapsible-well",
    template:` 
    <div (click)="toggleData()" class="well pointable"> 
        <h4>
            <ng-content select="[well-title]"></ng-content>
        </h4>
        <ng-content select="[well-body]" *ngIf="visible">
        </ng-content>
    </div>`
})

export class CollapsibleWellComp { 
    visible: boolean = true;

    toggleData()
    {
        this.visible = !this.visible;
    }

}