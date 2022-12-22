import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { HomeComponent } from './home.component';
import { StoreModule } from '@ngrx/store';
import { ofertaEscolhidaReducer } from 'src/app/shared/store/reducers/oferta.reducer';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, ComponentsModule],
})
export class HomeModule {}
