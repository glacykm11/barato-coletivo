import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Oferta } from 'src/app/models/oferta';
import { OfertasService } from 'src/app/shared/services/ofertas/ofertas.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.scss'],
})
export class OfertaComponent implements OnInit {
  oferta: Oferta;
  oferta$;
  imagemGenerica = '../../../assets/images/hotel-presidente-4s.jpg';

  constructor(
    private ofertaService: OfertasService,
    private router: Router,
    private store: Store<{ oferta: Oferta }>
  ) {}

  ngOnInit(): void {
    this.ofertaService
      .getOfertaSelecionada()
      .subscribe((response) => (this.oferta = response));
    this.oferta$ = this.store.select('oferta');
    this.oferta$.subscribe((resp) => console.log(resp));
  }

  navegarParaPagamento(oferta: Oferta) {
    this.ofertaService.setOfertaCompradas(oferta);
    this.router.navigate(['/pagamento']);
  }
}
