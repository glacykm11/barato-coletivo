import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() imagemUrl: string = '../../../assets/images/hotel-presidente-4s.jpg';
  @Input() titulo: string;
  @Input() descricao: string;
  @Input() preco: number;

  constructor() {}

  ngOnInit(): void {}
}
