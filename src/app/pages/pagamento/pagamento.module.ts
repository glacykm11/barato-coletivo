import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagamentoRoutingModule } from './pagamento-routing.module';
import { PagamentoComponent } from './pagamento.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PagamentoComponent],
  imports: [
    CommonModule,
    PagamentoRoutingModule,
    RouterModule,
    ReactiveFormsModule,
  ],
})
export class PagamentoModule {}
