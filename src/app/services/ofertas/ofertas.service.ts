import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Oferta } from 'src/app/models/oferta';

@Injectable({
  providedIn: 'root',
})
export class OfertasService {
  private ofertaSelecionada = new BehaviorSubject<Oferta>(null);

  constructor() {}

  setOfertaSelecionada(oferta: Oferta): void {
    this.ofertaSelecionada.next(oferta);
  }

  getOfertaSelecionada(): Observable<Oferta> {
    return this.ofertaSelecionada.asObservable();
  }
}
