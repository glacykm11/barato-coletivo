import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { HomeRoutingModule } from './home-routing.module';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { HomeComponent } from './home.component';

import {
  ofertaEscolhidaReducer,
  ofertaFeatureKey,
} from 'src/app/shared/store/reducers/oferta.reducer';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    StoreModule.forFeature(ofertaFeatureKey, ofertaEscolhidaReducer),
  ],
})
export class HomeModule {}
