import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';


@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.page.html',
  styleUrls: ['./contatos.page.scss'],
})
export class ContatosPage implements OnInit {

  public todosContatos : any

  constructor() {private dados : ServiceService}{
    this.todosContatos = this.dados.enviarTodosContatos()
  }

  ngOnInit() {
  }

}
