import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { LoadingDirectiveModule } from '../../directives/loading/loading-directive.module';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, LoadingDirectiveModule],
  exports: [CardComponent],
})
export class CardModule {}
