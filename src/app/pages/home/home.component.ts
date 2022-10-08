import { Component, OnInit } from '@angular/core';
import { Entretenimentos } from 'src/app/models/entretenimentos';
import { Gastronomias } from 'src/app/models/gastronomias';
import { Hoteis } from 'src/app/models/hoteis';
import { ENTRETENIMENTOS } from 'src/assets/mocks/mock-entretenimentos';
import { GASTRONOMIAS } from 'src/assets/mocks/mock-gastronomias';
import { HOTEIS } from 'src/assets/mocks/mock-hoteis';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  hoteis: Hoteis[] = HOTEIS;
  gastronomias: Gastronomias[] = GASTRONOMIAS;
  entretenimentos: Entretenimentos[] = ENTRETENIMENTOS;

  constructor() {}

  ngOnInit(): void {}

  comprar(event) {
    console.log(event);
  }
}
