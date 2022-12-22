import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Oferta } from 'src/app/models/oferta';
import { selectFeatureOferta } from 'src/app/shared/store/selectors/oferta.selector';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.scss'],
})
export class OfertaComponent implements OnInit {
  oferta: Oferta;
  oferta$: Observable<Oferta>;
  imagemGenerica = '../../../assets/images/hotel-presidente-4s.jpg';

  constructor(private router: Router, private store: Store) {}

  ngOnInit(): void {
    this.obterOfertaSelecionada();
  }

  obterOfertaSelecionada() {
    this.oferta$ = this.store.select(selectFeatureOferta);
    this.oferta$.subscribe((resp) => (this.oferta = resp));
  }

  navegarParaPagamento() {
    this.router.navigate(['/pagamento']);
  }
}
