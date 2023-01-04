import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascaraDataDirective } from './mascara-data/mascara-data.directive';
import { MascaraNumeroCartaoDirective } from './mascara-numero-cartao/mascara-numero-cartao.directive';

@NgModule({
  declarations: [MascaraDataDirective, MascaraNumeroCartaoDirective],
  imports: [CommonModule],
  exports: [MascaraDataDirective],
})
export class DirectivesModule {}
