import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[mascaraNumeroCartao]',
})
export class MascaraNumeroCartaoDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input') onKeyPress() {
    console.log(this.el.nativeElement.value);
  }
}
