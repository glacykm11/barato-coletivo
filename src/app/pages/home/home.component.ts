import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Oferta } from 'src/app/models/oferta';
import { ENTRETENIMENTOS } from 'src/assets/mocks/mock-entretenimentos';
import { GASTRONOMIAS } from 'src/assets/mocks/mock-gastronomias';
import { HOTEIS } from 'src/assets/mocks/mock-hoteis';
import * as OfertaActions from '../../shared/store/actions/oferta.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  hoteis: Oferta[] = HOTEIS;
  gastronomias: Oferta[] = GASTRONOMIAS;
  entretenimentos: Oferta[] = ENTRETENIMENTOS;

  private oferta$: Observable<Oferta>;

  constructor(private router: Router, private store: Store) {}

  ngOnInit(): void {}

  comprar(event: Oferta) {
    this.router.navigate([`oferta/${event.id}`]);
    this.store.dispatch(OfertaActions.ofertaEscolhida({ oferta: event }));
  }

  scrollLeft(id: string) {
    var container = document.getElementById(id);
    this.sideScroll(container, 'left', 40, 260, 10);
  }

  scrollRight(id: string) {
    var container = document.getElementById(id);
    this.sideScroll(container, 'right', 40, 260, 10);
  }

  sideScroll(
    element: any,
    direction: string,
    speed: number,
    distance: number,
    step: number
  ) {
    let scrollAmount = 0;
    var slideTimer = setInterval(function () {
      if (direction == 'left') {
        element.scrollLeft -= step;
      } else {
        element.scrollLeft += step;
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    }, speed);
  }
}
