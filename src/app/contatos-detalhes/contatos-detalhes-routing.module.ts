import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContatosDetalhesPage } from './contatos-detalhes.page';

const routes: Routes = [
  {
    path: '',
    component: ContatosDetalhesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContatosDetalhesPageRoutingModule {}
