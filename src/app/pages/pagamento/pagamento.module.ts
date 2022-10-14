import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagamentoRoutingModule } from './pagamento-routing.module';
import { PagamentoComponent } from './pagamento.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PagamentoComponent],
  imports: [CommonModule, PagamentoRoutingModule, RouterModule],
})
export class PagamentoModule {}
