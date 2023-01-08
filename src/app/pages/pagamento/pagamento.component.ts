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
  resumoCompra: Oferta[] = [];
  totalOfertas = 0;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.obterOfertasSelecionadas();
    this.totalOfertasCompradas();
    this.resumirCompra();
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

  quantidadeOferta(oferta: Oferta): number {
    const ofertas = this.ofertas.filter(
      (elemento) => elemento.id === oferta.id
    );
    let ofertasExistenetsPorId = ofertas.length;

    return ofertasExistenetsPorId;
  }

  totalOfertasCompradas() {
    let somaTotal = 0;
    for (let i; i < this.ofertas.length; i++) {
      somaTotal += this.ofertas[i].preco;
    }

    this.totalOfertas = somaTotal;
  }

  resumirCompra() {
    const ofertasNaoDuplicadas = this.ofertas.reduce((acc, current) => {
      const x = acc.find((item) => item.id === current.id);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);

    this.resumoCompra = ofertasNaoDuplicadas;
  }
}
