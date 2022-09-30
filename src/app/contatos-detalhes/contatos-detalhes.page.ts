import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contatos-detalhes',
  templateUrl: './contatos-detalhes.page.html',
  styleUrls: ['./contatos-detalhes.page.scss'],
})
export class ContatosDetalhesPage implements OnInit {

  public todosContatos : any
  public modoEdicao = false

  clientForm : FormGroup
  private alertController: AlertController

  constructor(private dados : ServiceService,private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) { }

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
  header: 'Tem certeza?',
  cssClass: 'custom-alert',
  buttons: [
  {
  text: 'Não',
  cssClass: 'alert-button-cancel',
  },
  {
  text: 'sim',
  cssClass: 'alert-button-confirm',
  handler: () => {
  this.deletar();
  
        },
      },
      ],
  });
  }
  }

