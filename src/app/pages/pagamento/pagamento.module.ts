import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagamentoRoutingModule } from './pagamento-routing.module';
import { PagamentoComponent } from './pagamento.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [PagamentoComponent],
  imports: [
    CommonModule,
    PagamentoRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot({
      showMaskTyped: true,
    }),
  ],
})
export class PagamentoModule {}
