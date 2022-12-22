import { Action, createReducer, on } from '@ngrx/store';
import { Oferta } from 'src/app/models/oferta';
import * as OfertaActions from '../actions/oferta.actions';

export const ofertasSelecionadasFeatureKey = 'ofertas-selecionadas';

export const initialState: Oferta[] = [];

export const ofertasSelecionadasReducer = createReducer(
  initialState,
  on(OfertaActions.limparCarrinho, (_) => []),
  on(
    OfertaActions.ofertasSelecionadas,
    (state, { ofertasSelecionadas: ofertasSelecionadas }) => ({
      ...state,
      ofertasSelecionadas
    })
  )
);
