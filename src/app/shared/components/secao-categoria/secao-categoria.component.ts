import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Oferta } from 'src/app/models/oferta';

@Component({
  selector: 'app-secao-categoria',
  templateUrl: './secao-categoria.component.html',
  styleUrls: ['./secao-categoria.component.scss'],
})
export class SecaoComponent implements OnInit {
  @Input() dados: Oferta[];
  @Input() nomeSecao: string;
  @Input() idScrollingWrapper: string;
  @Input() loading: boolean;
  @Output() comprar = new EventEmitter<Oferta>();

  private compraSelecionada: Oferta;

  constructor() {}

  ngOnInit(): void {}

  public armazenarCompraSelecionada(event: Oferta): void {
    this.compraSelecionada = event;
    this.emitirCompra();
  }

  public emitirCompra() {
    this.comprar.emit(this.compraSelecionada);
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
