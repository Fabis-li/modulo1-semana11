import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Exercicio2Component } from './exercicio2/exercicio2.component';
import { Exercicio1Component } from './exercicio1/exercicio1.component';
import { Exercicio3Component } from './exercicio3/exercicio3.component';
import { Exercicio4Component } from './exercicio4/exercicio4.component';
import { Exercicio5Component } from './exercicio5/exercicio5.component';
import { ExercicioAulaComponent } from './exercicio-aula/exercicio-aula.component';
import { Exercicio6Component } from './exercicio6/exercicio6.component';
import { FormsModule } from '@angular/forms';
import { Exercicio8Component } from './exercicio8/exercicio8.component';
import { Exercicio9Component } from './exercicio9/exercicio9.component';
import { Exercicio10Component } from './exercicio10/exercicio10.component';


@NgModule({
  declarations: [
    AppComponent,
    Exercicio2Component,
    Exercicio1Component,
    Exercicio3Component,
    Exercicio4Component,
    Exercicio5Component,
    ExercicioAulaComponent,
    Exercicio6Component,
    Exercicio8Component,
    Exercicio9Component,
    Exercicio10Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
