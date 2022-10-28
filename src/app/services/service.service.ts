import { Injectable } from '@angular/core';
import { Pessoa } from '../models/pessoa.model';
import { Guid} from 'guid-typescript';
import { Storage } from '@ionic/storage-angular';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private contatos_phone = [
    {id: 1, nome:'Pit', sobrenome:'Bull', tel:"(35)9999-9999", email:'pitbulldofunk.com',tipo:'Celular'},
    {id: 2, nome:'Coreanin', sobrenome:'Cavalcant', tel:"(35)9999-9999", email:'freguesia@gmail.com',tipo:'Celular'},
    {id: 3, nome:'K1 do Jordan', sobrenome:'Paz', tel:"(11)9999-9999", email:'shuvin@gmail.com',tipo:'Celular'},
    {id: 4, nome:'Jat', sobrenome:'Reis',tel:"(11)9948-1893", email:'lucaisreis22@gmail.com',tipo:'Celular'}
  ]

  constructor( private storage : Storage ) { }

  async listarTodos(){
    let arrayPessoa: Pessoa [] = [];

    await this.storage.forEach((value: string) =>
      {const pessoa: Pessoa = JSON.parse(value); arrayPessoa.push(pessoa)})

    return arrayPessoa;
  }

  inserir(argumento: Pessoa){

    argumento.id = Guid.create()

    this.storage.set(argumento.id.toString(), JSON.stringify(argumento))
  }

  enviarTodosDados(){
    return this.contatos_phone
  }

  filtrodaId(id : number){
    const ContatoSelecionado = this.contatos_phone.filter(contatos1 => contatos1.id === id)
    return ContatoSelecionado[0]
  }

  recebeDados(dadosRecebidos : any){
    dadosRecebidos.id = this.contatos_phone.length - 1
    this.contatos_phone.push(dadosRecebidos)
  }

  deletaDados(dadosRecebidos : any){
    this.contatos_phone.splice(this.contatos_phone.indexOf(dadosRecebidos),1)
  }

}
