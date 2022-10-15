import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Oferta } from 'src/app/models/oferta';

@Injectable({
  providedIn: 'root',
})
export class OfertasService {
  private ofertaSelecionada = new BehaviorSubject<Oferta>(null);
  private ofertasCompradas: Oferta[] = [];

  constructor() {}

  setOfertaSelecionada(ofertaSelecionada: Oferta): void {
    this.ofertaSelecionada.next(ofertaSelecionada);
  }

  getOfertaSelecionada(): Observable<any> {
    return this.ofertaSelecionada.asObservable();
  }

  setOfertaCompradas(ofertaComprada: Oferta): void {
    this.ofertasCompradas.push(ofertaComprada);
  }

  getOfertaCompradas(): Oferta[] {
    return this.ofertasCompradas;
  }

  limparOfertaCompradas(): void {
    this.ofertasCompradas = [];
  }
}
