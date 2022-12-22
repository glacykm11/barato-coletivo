import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfertaRoutingModule } from './oferta-routing.module';
import { RouterModule } from '@angular/router';
import { OfertaComponent } from './oferta.component';
import { StoreModule } from '@ngrx/store';
import {
  ofertasSelecionadasFeatureKey,
  ofertasSelecionadasReducer,
} from 'src/app/shared/store/reducers/ofertas-selecionadas.reducer';

@NgModule({
  declarations: [OfertaComponent],
  imports: [
    CommonModule,
    OfertaRoutingModule,
    RouterModule,
    StoreModule.forFeature(
      ofertasSelecionadasFeatureKey,
      ofertasSelecionadasReducer
    ),
  ],
})
export class OfertaModule {}
