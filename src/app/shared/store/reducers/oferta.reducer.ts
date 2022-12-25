import { Action, createReducer, on } from '@ngrx/store';
import { Oferta } from 'src/app/models/oferta';
import * as OfertaActions from '../actions/oferta.actions';

export const ofertaFeatureKey = 'oferta';

export const initialState: Oferta = {
  id: '',
  nome: '',
  categoria: '',
  descricao: '',
  preco: null,
  imagemUrl: '',
};

export const ofertaEscolhidaReducer = createReducer(
  initialState,
  on(OfertaActions.ofertaEscolhida, (state, { oferta }) => ({
    ...state,
    ...oferta,
  }))
);
