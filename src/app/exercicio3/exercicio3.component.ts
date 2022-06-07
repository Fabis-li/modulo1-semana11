import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio3',
  templateUrl: './exercicio3.component.html',
  styleUrls: ['./exercicio3.component.scss']
})
export class Exercicio3Component implements OnInit {

  arrayList:string [] = [
    'Uma saida de mestre',
    'Onze homens e um segredo',
    'Truque de mestre',
    'Peanuts, o filme',
    'Jogador numero 1'

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
