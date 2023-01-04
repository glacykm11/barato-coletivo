import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMascaraNumeroCartao]',
})
export class MascaraNumeroCartaoDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input') onKeyPress() {
    console.log(this.el.nativeElement.value);
  }
}
