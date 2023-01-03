import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[mascaraData]',
})
export class MascaraDataDirective {
  private inputLenght: number;

  constructor(private el: ElementRef) {}

  @HostListener('input') onKeyPress() {
    this.inputLenght = this.el.nativeElement.value.length;
    if (this.inputLenght === 2 || this.inputLenght === 5) {
      this.el.nativeElement.value += '/';
    }
  }

  @HostListener('keydown', ['$event']) onKeyDownBackspace(
    event: KeyboardEvent
  ) {
    if (event.key === 'Backspace' && this.inputLenght == 6) {
      this.el.nativeElement.value =
        this.el.nativeElement.value.slice(0, -1) + '';
    }
    if (
      (event.key === 'Backspace' || event.key === 'Delete') &&
      this.inputLenght == 3
    ) {
      this.el.nativeElement.value =
        this.el.nativeElement.value.slice(0, -1) + '';
    }
  }
}
