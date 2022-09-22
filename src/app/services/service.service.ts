import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private contatos_phone = [
    {id: 1, nome:'Pit', tel:"(35)9999-9999"},
    {id: 2, nome:'Coreanin', tel:"(35)9999-9999"},
    {id: 3, nome:'K1 do Jordan', tel:"(11)9999-9999"},
    {id: 4, nome:'Jat', tel:"(11)9948-1893"}
  ]

  constructor() { }

  enviarTodosDados(){
    return this.contatos_phone
  }

  filtrodaId(id : number){
    const ContatoSelecionado = this.contatos_phone.filter(contatos1 => contatos1.id === id)
    return ContatoSelecionado[0]
  }

  recebeDados(dadosRecebidos : any){
    dadosRecebidos.id = this.contatos_phone.length + 1
    this.contatos_phone.push(dadosRecebidos)
  }

  deletaDados(dadosRecebidos : any){
    this.contatos_phone.splice(this.contatos_phone.indexOf(dadosRecebidos),1)
  }

}
