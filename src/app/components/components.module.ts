import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent, CardComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, CardComponent],
})
export class ComponentsModule {}
