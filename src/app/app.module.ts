import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { OfertaModule } from './pages/oferta/oferta.module';
import { ComponentsModule } from './shared/components/components.module';
import { HomeModule } from './pages/home/home.module';
import { StoreModule, StoreRootModule } from '@ngrx/store';
import {
  ofertaEscolhidaReducer,
  ofertaFeatureKey,
} from './shared/store/reducers/oferta.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    OfertaModule,
    ComponentsModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(ofertaFeatureKey, ofertaEscolhidaReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
