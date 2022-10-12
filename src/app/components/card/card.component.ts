import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Oferta } from 'src/app/models/oferta';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() ofertas: Oferta;
  @Output() cliqueComprar = new EventEmitter<Oferta>();

  imagemUrl: string = '../../../assets/images/hotel-presidente-4s.jpg';

  constructor() {}

  ngOnInit(): void {}

  emitirComprar(ofertaSelecionada: Oferta) {
    this.cliqueComprar.emit(ofertaSelecionada);
  }
}
