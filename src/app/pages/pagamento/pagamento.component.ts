import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Oferta } from 'src/app/models/oferta';
import { selectFeatureOferta } from 'src/app/shared/store/selectors/oferta.selector';

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
  oferta$: any;
  ofertas: Oferta[];
  totalOfertas = 0;
  oferta;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.obterOfertasSelecionadas();
    this.totalOfertasCompradas();
  }

  onSubmit() {
    console.log('tá pago!');
    //this.ofertaService.limparOfertaCompradas();
  }

  obterOfertasSelecionadas() {
    this.oferta$ = this.store.select(selectFeatureOferta);
    this.oferta$.subscribe((resp) => console.log(resp));
  }

  totalOfertasCompradas() {
    this.ofertas.forEach((oferta) => {
      this.totalOfertas += oferta.preco;
    });
  }
}
