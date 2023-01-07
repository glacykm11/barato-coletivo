import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecaoComponent } from './secao-categoria.component';
import { CardModule } from '../card/card.module';

@NgModule({
  declarations: [SecaoComponent],
  imports: [CommonModule, CardModule],
  exports: [SecaoComponent],
})
export class SecaoCategoriaModule {}
