import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators  } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { Produto } from '../models/produto.model';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {

  private produto: Produto
  public produtoForm : FormGroup
  public arrayProduto: any

  constructor(
    private formBuilder: FormBuilder,
    private produtosService : ProdutosService) { }

  ngOnInit() {

    this.produto = {id: Guid.createEmpty(), nome:"", tipo: ""}

    this.produtoForm = this.formBuilder.group({

      id : [this.produto.id],
      nome : [this.produto.nome, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      tipo : [this.produto.tipo]

    })

  }


  enviar(){
    if (this.produtoForm.valid)
      this.produtosService.recebeDados(this.produtoForm.value)
  }


}