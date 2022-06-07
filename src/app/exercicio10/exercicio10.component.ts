import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-exercicio10',
  templateUrl: './exercicio10.component.html',
  styleUrls: ['./exercicio10.component.scss']
})
export class Exercicio10Component implements OnInit {

  tarefas:string[] = []

  listaTarefas:string = ""


  constructor() { }

  ngOnInit(): void {
  }

  salvarLista(){
    this.tarefas.push(this.listaTarefas);
    console.log(this.tarefas) ;  
  }

  
  
}
