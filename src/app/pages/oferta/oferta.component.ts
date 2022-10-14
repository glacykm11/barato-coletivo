import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Oferta } from 'src/app/models/oferta';
import { OfertasService } from 'src/app/services/ofertas/ofertas.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.scss'],
})
export class OfertaComponent implements OnInit {
  oferta;
  constructor(private ofertaService: OfertasService, private router: Router) {}

  ngOnInit(): void {
    this.ofertaService
      .getOfertaSelecionada()
      .subscribe((response) => (this.oferta = response));
  }

  navegarParaPagamento() {
    this.router.navigate(['/pagamento']);
  }
}
