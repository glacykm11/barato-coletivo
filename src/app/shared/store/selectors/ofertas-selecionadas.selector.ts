import { createSelector } from '@ngrx/store';
import { Oferta } from 'src/app/models/oferta';

export interface OfertaSelecionadaState {
  ofertasSelecionadas: Oferta[];
}

export const selectOfertasSelecionadas = (state: OfertaSelecionadaState) =>
  state.ofertasSelecionadas;
