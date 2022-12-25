import { createSelector } from '@ngrx/store';
import { Oferta } from 'src/app/models/oferta';

export interface AppState {
  oferta: Oferta;
}

export const selectFeatureOferta = (state: AppState) => state.oferta;

export const selectFeatureDescricao = createSelector(
  selectFeatureOferta,
  (state: Oferta) => state.descricao
);
