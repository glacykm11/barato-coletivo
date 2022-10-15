import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfertaRoutingModule } from './oferta-routing.module';
import { RouterModule } from '@angular/router';
import { OfertaComponent } from './oferta.component';

@NgModule({
  declarations: [OfertaComponent],
  imports: [CommonModule, OfertaRoutingModule, RouterModule],
})
export class OfertaModule {}
