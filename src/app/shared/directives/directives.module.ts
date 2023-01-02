import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascaraDataDirective } from './mascara-data/mascara-data.directive';

@NgModule({
  declarations: [MascaraDataDirective],
  imports: [CommonModule],
  exports: [MascaraDataDirective],
})
export class DirectivesModule {}
