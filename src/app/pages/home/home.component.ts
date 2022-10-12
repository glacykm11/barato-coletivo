import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Oferta } from 'src/app/models/oferta';
import { OfertasService } from 'src/app/services/ofertas/ofertas.service';
import { ENTRETENIMENTOS } from 'src/assets/mocks/mock-entretenimentos';
import { GASTRONOMIAS } from 'src/assets/mocks/mock-gastronomias';
import { HOTEIS } from 'src/assets/mocks/mock-hoteis';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  hoteis: Oferta[] = HOTEIS;
  gastronomias: Oferta[] = GASTRONOMIAS;
  entretenimentos: Oferta[] = ENTRETENIMENTOS;

  constructor(private router: Router, private ofertasService: OfertasService) {}

  ngOnInit(): void {}

  comprar(event: Oferta) {
    this.router.navigate([`oferta/${event.id}`]);
    this.ofertasService.setOfertaSelecionada(event);
  }
}
