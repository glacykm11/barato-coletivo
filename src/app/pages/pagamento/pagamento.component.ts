import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Oferta } from 'src/app/models/oferta';
import { selectOfertasSelecionadas } from '../../shared/store/selectors/ofertas-selecionadas.selector';
import * as OfertaActions from '../../shared/store/actions/oferta.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.scss'],
})
export class PagamentoComponent implements OnInit {
  pagamentoForm = new FormGroup({
    numeroCartao: new FormControl(''),
    nomeImpressoCartao: new FormControl(''),
    validadeCartao: new FormControl(''),
    codigoSegurancaCartao: new FormControl(''),
  });
  oferta$: Observable<Oferta[]>;
  ofertas: Oferta[] = [];
  totalOfertas = 0;
  oferta;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.obterOfertasSelecionadas();
    this.totalOfertasCompradas();
  }

  onSubmit() {
    alert('Sua compra foi finalizada com sucesso!');
    this.store.dispatch(OfertaActions.limparCarrinho());
    this.totalOfertas = 0;
  }

  obterOfertasSelecionadas() {
    this.oferta$ = this.store.select(selectOfertasSelecionadas);
    this.oferta$.subscribe((resp) => (this.ofertas = resp));
  }

  totalOfertasCompradas() {
    this.ofertas.forEach((oferta) => {
      this.totalOfertas += oferta.preco;
    });
  }
}
