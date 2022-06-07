import { Component, OnInit } from '@angular/core';
import { IAnimal } from '../model/modelo.model';


@Component({
  selector: 'app-exercicio9',
  templateUrl: './exercicio9.component.html',
  styleUrls: ['./exercicio9.component.scss']
})
export class Exercicio9Component implements OnInit {

  click:boolean = false;

  cadastroDados: IAnimal = {
    nomeDono: "",
    cpf: "",
    email: "",
    nomeAnimal: "",
    codigoIdentificacaoDoAnimal: 0,
  }




  constructor() { }

  ngOnInit(): void {
  }

  enviarDados(){
    this.click = true
    console.log(this.cadastroDados);
  }


}
