import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Oferta } from 'src/app/models/oferta';
import { selectOfertasSelecionadas } from '../../store/selectors/ofertas-selecionadas.selector';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  ofertasSelecionadas$: Observable<Oferta[]>;
  qntdDeOfertasSelecionadas: number;

  constructor(private router: Router, private store: Store) {}

  ngOnInit(): void {
    this.recuperarOfertasSelecionadas();
  }

  recuperarOfertasSelecionadas() {
    this.ofertasSelecionadas$ = this.store.select(selectOfertasSelecionadas);
    this.ofertasSelecionadas$.subscribe((resp) => {
      this.qntdDeOfertasSelecionadas = resp.length;
    });
  }

  navegarParaHome() {
    this.router.navigate(['/']);
  }

  navegarParaCheckout() {
    this.router.navigate(['/pagamento']);
  }
}
