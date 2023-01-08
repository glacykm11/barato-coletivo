import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Oferta } from 'src/app/models/oferta';
import { DADOS } from 'src/assets/mocks/mock-dados';
import * as OfertaActions from '../../shared/store/actions/oferta.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  hoteis: Oferta[];
  gastronomias: Oferta[];
  entretenimentos: Oferta[];
  dados: Oferta[] = DADOS;
  loading: boolean = true;

  private oferta$: Observable<Oferta>;

  constructor(private router: Router, private store: Store) {}

  ngOnInit(): void {
    this.filtrarHoteis();
    this.filtrarGastronomias();
    this.filtrarEntretenimentos();
    setTimeout(() => (this.loading = !this.loading), 2500);
  }

  public comprar(event: Oferta): void {
    this.router.navigate([`oferta/${event.id}`]);
    this.store.dispatch(OfertaActions.ofertaEscolhida({ oferta: event }));
  }

  private filtrarGastronomias(): void {
    this.gastronomias = this.dados.filter((dado) => {
      return dado.categoria === 'gastronomia';
    });
  }

  private filtrarEntretenimentos(): void {
    this.entretenimentos = this.dados.filter((dado) => {
      return dado.categoria === 'entretenimento';
    });
  }

  private filtrarHoteis(): void {
    this.hoteis = this.dados.filter((dado) => {
      return dado.categoria === 'hotel';
    });
  }
}
