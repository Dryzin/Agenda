import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContatosDetalhesPageRoutingModule } from './contatos-detalhes-routing.module';

import { ContatosDetalhesPage } from './contatos-detalhes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContatosDetalhesPageRoutingModule
  ],
  declarations: [ContatosDetalhesPage]
})
export class ContatosDetalhesPageModule {}
