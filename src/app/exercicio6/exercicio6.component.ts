import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio6',
  templateUrl: './exercicio6.component.html',
  styleUrls: ['./exercicio6.component.scss']
})
export class Exercicio6Component implements OnInit {

  nomeDoUsuario:string = "";
  cpf:number = 0;
  diaAniversario: number = 0;
  senha: any = null;
  envia:boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  enviar(){
    console.log(this.nomeDoUsuario, this.cpf, this.diaAniversario, this.senha);
  }

  valido(){
    this.envia = true;
  }
}

