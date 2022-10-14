import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfertaRoutingModule } from './oferta-routing.module';
import { OfertaComponent } from './oferta.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [OfertaComponent],
  imports: [CommonModule, OfertaRoutingModule, RouterModule],
})
export class OfertaModule {}
