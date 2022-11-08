import { Component, OnInit } from '@angular/core';

import { Guid } from 'guid-typescript';
import { Pessoa } from '../models/pessoa.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../services/service.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  private pessoa : Pessoa
  public pessoaForm : FormGroup
  public arrayPessoa: any

  constructor(private formBuilder : FormBuilder, private pessoaService: ServiceService) {}

  ngOnInit() {

 //    this.pessoa = {id: Guid.createEmpty(), nome:"", sobrenome:"", tel:"", email:"", tipo:""}

 //    this.pessoaForm = this.formBuilder.group

 //    ({
 //      id : [this.pessoa.id],
 //      nome : [this.pessoa.nome, Validators.required],
 //      sobrenome:[""],
 //      tel:[""],
 //      email:[""],
 //      tipo:[""]

 //    })
  }

//  enviar(){
//    if (this.pessoaForm.valid){
//      this.pessoaService.inserir(this.pessoaForm.value)
//    }}

}
