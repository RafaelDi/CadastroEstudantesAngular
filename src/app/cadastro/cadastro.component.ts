import { Component, OnInit } from '@angular/core';
import { Dados } from '../alunodados';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  alunodados: Dados = {
    nome: 'Rafael',
    idade: 28,
    sexo: 'masculino',
    RA: 123,
    turma: 'ADS matutino'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
