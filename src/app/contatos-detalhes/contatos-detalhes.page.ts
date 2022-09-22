import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-contatos-detalhes',
  templateUrl: './contatos-detalhes.page.html',
  styleUrls: ['./contatos-detalhes.page.scss'],
})
export class ContatosDetalhesPage implements OnInit {

  public todosContatos : any
  public modoEdicao = false

  constructor(private dados : ServiceService,private route: ActivatedRoute) { }

  ngOnInit() {
    const id : number = Number(this.route.snapshot.paramMap.get('id'))
    if (id > 0){
      this.todosContatos = this.dados.filtrodaId(id)
    } else{
      this.todosContatos = {id, nome: "", valor: 0.0}
      this.modoEdicao = true
    }
  }

  deletar(){
    this.dados.deletaDados(this.todosContatos)
  }

  iniciarEdicao(){
    this.modoEdicao = true
  }
  encerrarEdicao(){
    const id: number = Number(this.route.snapshot.paramMap.get('id'))

    if (id > 0) {
    this.modoEdicao = false
    
    }else{
    
    this.dados.recebeDados(this.todosContatos)
    this.modoEdicao = false
  }
}

}
