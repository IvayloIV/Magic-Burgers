import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class HighlightDirective implements OnInit {
    @Input() highlight: string;

    constructor(private el: ElementRef) {}
    
    ngOnInit() {
        this.el.nativeElement.style.color = this.highlight;
    }
    
    @HostListener('click') onMouseClick() {
        this.changeColor();
    }
    
    private changeColor() {
        if (this.el.nativeElement.style.color === 'green') {
            this.setColor('red');
        } else {
            this.setColor('green')
        }
    }

    private setColor(color: string) {
        this.el.nativeElement.style.color = color;
    }
}
