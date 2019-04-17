import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class HighlightDirective implements OnInit {
    @Input() highlight: boolean;
    @Input() value: string;

    constructor(private el: ElementRef) {}
    
    ngOnInit() {
        this.checkCondition(this.highlight);
    }
    
    @HostListener('click') onMouseClick() {
        this.changeElement();
    }
    
    private changeElement() {
        this.checkCondition(this.el.nativeElement.innerHTML.indexOf('check') === -1);
    }

    private checkCondition(condition: boolean) {
        if (condition) {
            this.setValue('<i class="fas fa-check"></i>');
        } else {
            this.setValue('<i class="fas fa-times"></i>');
        }
    }
    
    private setValue(str: string) {
        this.el.nativeElement.innerHTML = str + ' ' + this.value;
    }
}
