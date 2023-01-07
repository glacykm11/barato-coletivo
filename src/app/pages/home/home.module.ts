import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import {
  ofertaEscolhidaReducer,
  ofertaFeatureKey,
} from 'src/app/shared/store/reducers/oferta.reducer';
import { SecaoCategoriaModule } from 'src/app/shared/components/secao-categoria/secao-categoria.module';
import { LoadingDirectiveModule } from 'src/app/shared/directives/loading/loading-directive.module';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavbarModule,
    StoreModule.forFeature(ofertaFeatureKey, ofertaEscolhidaReducer),
    SecaoCategoriaModule,
    LoadingDirectiveModule,
    CardModule,
  ],
})
export class HomeModule {}
