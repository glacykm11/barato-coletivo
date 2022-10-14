import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'src/app/services/ofertas/ofertas.service';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.scss'],
})
export class PagamentoComponent implements OnInit {
  constructor(private ofertaService: OfertasService) {}

  ngOnInit(): void {
    this.ofertaService.getOfertaSelecionada().subscribe((resposta) => {
      console.log(resposta);
    });
  }
}
