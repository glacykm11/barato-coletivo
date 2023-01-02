import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[mascaraData]',
})
export class MascaraDataDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input') onKeyPress() {
    let inputLenght = this.el.nativeElement.value.length;

    if (inputLenght === 2 || inputLenght === 5) {
      this.el.nativeElement.value += '/';
    }
  }
}
