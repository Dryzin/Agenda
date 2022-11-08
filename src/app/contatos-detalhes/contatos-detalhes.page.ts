import { Component, OnInit } from '@angular/core';

import { Guid } from 'guid-typescript';
import { Pessoa } from '../models/pessoa.model';
import { ActivatedRoute, Route } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { FormBuilder,FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contatos-detalhes',
  templateUrl: './contatos-detalhes.page.html',
  styleUrls: ['./contatos-detalhes.page.scss'],
})
export class ContatosDetalhesPage implements OnInit {

  handlerMessage = '';
  roleMessage = '';

  private pessoa : Pessoa
  public pessoaForm : FormGroup
  
  public arrayPessoa: any
  //public todosContatos : any

  public modoEdicao = false

  cliente = {}


  constructor(private dados : ServiceService,private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router,private alertController: AlertController) { }

//  enviar(id:string) {
//    if (this.pessoaForm.invalid || this.pessoaForm.pending){
//      return
//  }
//    else{
//
//      if (id = ''){
//        this.dados.recebeDados(this.pessoaForm.value)
//      }
//      
//      else{
//        this.encerrarEdicao()
//      }
//      
//    }
//}


  ngOnInit() {
    
    const id : string = String(this.route.snapshot.paramMap.get('id'))

    if (id != 'add'){
      //this.arrayPessoa = 
      this.dados.filtrodaId(id).then(array => this.pessoa = array)
    } else{
      this.modoEdicao = true
    }

      this.pessoa = {id: Guid.createEmpty(), nome:"", sobrenome:"", tel:"", email:"", tipo:""}

      this.pessoaForm = this.formBuilder.group({
        id : [this.pessoa.id],
        nome: [this.pessoa.nome, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
        sobrenome: [this.pessoa.sobrenome, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
        tipo: [this.pessoa.tipo],
        tel: [this.pessoa.tel, Validators.compose([Validators.required, Validators.minLength(13), Validators.maxLength(16)])],
        email: [this.pessoa.email, Validators.compose([Validators.required, Validators.email])]
      })
      
  }

  deletar(){
    
    const id : string = String (this.route.snapshot.paramMap.get('id'))

    this.dados.deletaDados(id)
    this.router.navigate(['/contatos/']).then (() => { window.location.reload()});
  }

  iniciarEdicao(){
    this.modoEdicao = true
    console.log(this.arrayPessoa)
  }
  encerrarEdicao(){
    const id: string = String(this.route.snapshot.paramMap.get('id'))

    if (id != "add") {

      if(this.pessoaForm.valid){

        this.dados.AlterarContatoId(id, this.pessoaForm.value)
        
        this.modoEdicao = false
    
    }}
    else{
    
    this.dados.recebeDados(this.arrayPessoa)
    this.modoEdicao = false
  }
}

async presentAlert() {
  const alert = await this.alertController.create({
    header: 'Alerta!',
    buttons: [
      {
        text: 'Cancelar',
        handler: () => {
          this.handlerMessage = 'Alert canceled';
        },
      },
      {
        text: 'OK',
        handler: () => {this.deletar();},
      },
    ],
  });

  await alert.present();

}
}


