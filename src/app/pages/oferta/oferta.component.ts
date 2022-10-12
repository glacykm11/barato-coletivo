import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'src/app/services/ofertas/ofertas.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.scss'],
})
export class OfertaComponent implements OnInit {
  oferta;
  constructor(private ofertaService: OfertasService) {}

  ngOnInit(): void {
    this.ofertaService
      .getOfertaSelecionada()
      .subscribe((response) => (this.oferta = response));
  }
}
