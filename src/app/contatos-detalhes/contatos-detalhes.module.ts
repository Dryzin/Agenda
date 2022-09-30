import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContatosDetalhesPageRoutingModule } from './contatos-detalhes-routing.module';

import { ContatosDetalhesPage } from './contatos-detalhes.page';
import { SimpleMaskModule } from 'ngx-ion-simple-mask';

@NgModule({
  imports: [
    SimpleMaskModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ContatosDetalhesPageRoutingModule,
    ReactiveFormsModule

  ],
  declarations: [ContatosDetalhesPage]
})
export class ContatosDetalhesPageModule {}
