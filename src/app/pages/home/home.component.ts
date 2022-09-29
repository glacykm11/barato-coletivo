import { Component, OnInit } from '@angular/core';
import { Hoteis } from 'src/app/models/hoteis';
import { HOTEIS } from 'src/assets/mocks/mock-hoteis';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  hoteis: Hoteis[] = HOTEIS;

  constructor() { }

  ngOnInit(): void {
  }

}
