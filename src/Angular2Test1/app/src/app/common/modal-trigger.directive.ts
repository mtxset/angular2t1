import { Directive, OnInit, Inject, ElementRef, Input } from "@angular/core";
import { JQueryService } from "./jQuery.service";

@Directive({
    selector: "[modal-trigger]"
})

export class ModalTriggerDirective implements OnInit {

    private el: HTMLElement;
    @Input("modal-trigger") modalId: string;

    constructor(
        @Inject(JQueryService) private $: any,
        _elementRef: ElementRef)
    {
        this.el = _elementRef.nativeElement;
    }

    ngOnInit()
    {   
        this.el.addEventListener("click", e => 
        {     
            this.$(`#${this.modalId}`).modal({});
        });
    }

}