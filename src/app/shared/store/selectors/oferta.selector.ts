import { createSelector } from '@ngrx/store';

export interface OfertaState {
  id: string;
  nome: string;
  categoria: string;
  descricao: string;
  preco: number;
  imagemUrl: string;
}

export interface AppState {
  oferta: OfertaState;
}

export const selectFeatureOferta = (state: AppState) => state.oferta;

export const selectFeatureDescricao = createSelector(
  selectFeatureOferta,
  (state: OfertaState) => state.descricao
);
