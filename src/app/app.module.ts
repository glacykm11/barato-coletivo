import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { OfertaModule } from './pages/oferta/oferta.module';
import { ComponentsModule } from './shared/components/components.module';
import { HomeModule } from './pages/home/home.module';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    OfertaModule,
    ComponentsModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
