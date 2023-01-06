import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[mascaraCodigoSeguranca]',
})
export class MascaraCodigoSegurancaDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: Event) {
    const initalValue = this.el.nativeElement.value;
    this.el.nativeElement.value = initalValue.replace(/[A-z]*/g, '');

    if (initalValue !== this.el.nativeElement.value) {
      event.stopPropagation();
    }
  }
}
