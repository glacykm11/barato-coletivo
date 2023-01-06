import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascaraDataDirective } from './mascara-data/mascara-data.directive';
import { MascaraNumeroCartaoDirective } from './mascara-numero-cartao/mascara-numero-cartao.directive';
import { MascaraCodigoSegurancaDirective } from './mascara-codigo-seguranca/mascara-codigo-seguranca.directive';
import { MascaraNomeDirective } from './mascara-nome/mascara-nome.directive';

@NgModule({
  declarations: [
    MascaraDataDirective,
    MascaraNumeroCartaoDirective,
    MascaraCodigoSegurancaDirective,
    MascaraNomeDirective,
  ],
  imports: [CommonModule],
  exports: [
    MascaraDataDirective,
    MascaraNumeroCartaoDirective,
    MascaraCodigoSegurancaDirective,
    MascaraNomeDirective,
  ],
})
export class DirectivesModule {}
