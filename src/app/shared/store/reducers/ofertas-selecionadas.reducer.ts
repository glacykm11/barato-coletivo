import { Action, createReducer, on } from '@ngrx/store';
import { Oferta } from 'src/app/models/oferta';
import * as OfertaActions from '../actions/oferta.actions';

export const ofertasSelecionadasFeatureKey = 'ofertasSelecionadas';

export const initialState: Oferta[] = [];

export const ofertasSelecionadasReducer = createReducer(
  initialState,
  on(OfertaActions.limparCarrinho, (_) => []),

  on(OfertaActions.ofertasSelecionadas, (state, { payload }) => [
    ...state,
    ...payload,
  ])
);
