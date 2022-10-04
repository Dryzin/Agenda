import { Component, OnInit } from '@angular/core';
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


  public todosContatos : any
  public modoEdicao = false

  cliente = {}
  formulario: FormGroup;


  constructor(private dados : ServiceService,private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router,private alertController: AlertController) { }

  enviar() {
    if (this.formulario.invalid || this.formulario.pending){
      return
  }else{
    console.log(this.cliente)
    this.encerrarEdicao()
  }
}

  ngOnInit() {
    
    const id : number = Number(this.route.snapshot.paramMap.get('id'))
    if (id > 0){
      this.todosContatos = this.dados.filtrodaId(id)
    } else{
      this.todosContatos = {id, nome: "", valor: 0.0}
      this.modoEdicao = true
    }

      this.formulario = this.formBuilder.group({
        nome: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
        sobrenome: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
        tipo: [''],
        tel: ['', Validators.compose([Validators.required, Validators.minLength(13), Validators.maxLength(16)])],
        email: ['', Validators.compose([Validators.required, Validators.email])]
      })
    
  }

  deletar(){
    this.dados.deletaDados(this.todosContatos)
    this.router.navigate(['/contatos/'])
  }

  iniciarEdicao(){
    this.modoEdicao = true
    console.log(this.todosContatos)
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

async presentAlert() {
  const alert = await this.alertController.create({
    header: 'Alert!',
    buttons: [
      {
        text: 'Cancel',
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


