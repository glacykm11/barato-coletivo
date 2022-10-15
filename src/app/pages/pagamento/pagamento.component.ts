import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Oferta } from 'src/app/models/oferta';
import { OfertasService } from 'src/app/shared/services/ofertas/ofertas.service';

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

  ofertas: Oferta[];
  totalOfertas = 0;

  constructor(private ofertaService: OfertasService) {}

  ngOnInit(): void {
    this.ofertas = this.ofertaService.getOfertaCompradas();
    this.totalOfertasCompradas();
  }

  onSubmit() {
    console.log('tá pago!');
    this.ofertaService.limparOfertaCompradas();
  }

  totalOfertasCompradas() {
    this.ofertas.forEach((oferta) => {
      this.totalOfertas += oferta.preco;
    });
  }
}
