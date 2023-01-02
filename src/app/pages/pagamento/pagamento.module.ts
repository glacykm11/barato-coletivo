import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagamentoRoutingModule } from './pagamento-routing.module';
import { PagamentoComponent } from './pagamento.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';

@NgModule({
  declarations: [PagamentoComponent],
  imports: [
    CommonModule,
    PagamentoRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    DirectivesModule,
  ],
})
export class PagamentoModule {}
