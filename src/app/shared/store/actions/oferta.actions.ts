import { createAction, props } from '@ngrx/store';
import { Oferta } from 'src/app/models/oferta';

export const ofertaEscolhida = createAction(
  '[Home Page] Oferta escolhida',
  props<{ oferta: Oferta }>()
);

export const ofertasSelecionadas = createAction(
  '[Oferta Page] Oferta selecionadas',
  props<{ ofertasSelecionadas: Oferta[] }>()
);

export const limparCarrinho = createAction('[Pagamento Page] Limpar carrinho');
