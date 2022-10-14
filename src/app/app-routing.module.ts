import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'oferta',
    loadChildren: () =>
      import('./pages/oferta/oferta.module').then((m) => m.OfertaModule),
  },
  {
    path: 'pagamento',
    loadChildren: () =>
      import('./pages/pagamento/pagamento.module').then(
        (m) => m.PagamentoModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
