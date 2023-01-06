import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[mascaraNumeroCartao]',
})
export class MascaraNumeroCartaoDirective {
  private inputLenght: number;
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: Event) {
    const initalValue = this.el.nativeElement.value;
    this.el.nativeElement.value = initalValue.replace(/[A-z]*/g, '');

    if (initalValue !== this.el.nativeElement.value) {
      event.stopPropagation();
    }

    this.inputLenght = this.el.nativeElement.value.length;
    if (
      this.inputLenght === 4 ||
      this.inputLenght === 9 ||
      this.inputLenght === 14
    ) {
      this.el.nativeElement.value += ' ';
    }
  }
}
