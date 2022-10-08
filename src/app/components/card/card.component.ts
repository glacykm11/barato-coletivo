import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() id: string;
  @Input() imagemUrl: string = '../../../assets/images/hotel-presidente-4s.jpg';
  @Input() titulo: string;
  @Input() descricao: string;
  @Input() preco: number;
  @Output() cliqueComprar = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  emitirComprar(id: string) {
    this.cliqueComprar.emit(id);
  }
}
