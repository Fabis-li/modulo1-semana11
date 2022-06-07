import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio4',
  templateUrl: './exercicio4.component.html',
  styleUrls: ['./exercicio4.component.scss']
})
export class Exercicio4Component implements OnInit {

  arrayFotos: any = [
    {
      url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/658.png",
      description:"Greninja, pokemon do tipo àgua e nortuno."
    },
    {
      url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
      description:"Bulbasaur, pokemon tipo grama."
    },
    {
      url: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
      description:"Charmander, pokemon tipo fogo."
    },
    {
      url: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
      description:"Squirtle, pokemon tipo água."
    },
    {
      url: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/094.png",
      description:"Gengar, pokemon tipo fantasma."
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
