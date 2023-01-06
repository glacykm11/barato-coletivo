import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[mascaraData]',
})
export class MascaraDataDirective {
  private inputLenght: number;

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: Event) {
    const initalValue = this.el.nativeElement.value;
    this.el.nativeElement.value = initalValue.replace(/[A-z]*/g, '');

    if (initalValue !== this.el.nativeElement.value) {
      event.stopPropagation();
    }

    this.inputLenght = this.el.nativeElement.value.length;
    if (this.inputLenght === 2 || this.inputLenght === 5) {
      this.el.nativeElement.value += '/';
    }
  }

  @HostListener('keydown', ['$event']) onKeyDownBackspace(
    event: KeyboardEvent
  ) {
    if (
      (event.key === 'Backspace' && this.inputLenght == 2) ||
      (event.key === 'Backspace' && this.inputLenght == 5)
    ) {
      this.el.nativeElement.value = this.el.nativeElement.value.slice(0, -1);
    }
  }
}
