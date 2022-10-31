import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';


@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.page.html',
  styleUrls: ['./contatos.page.scss'],
})

export class ContatosPage implements OnInit {

  public todosContatos : any
  public arrayPessoa: any


  constructor(private dados : ServiceService) {
    this.todosContatos = this.dados.enviarTodosDados()
  }


ngOnInit() {
  this.dados.listarTodos().then(arrayPessoa => {this.arrayPessoa = arrayPessoa} )
  }

}
