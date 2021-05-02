import { Component, OnInit } from '@angular/core';
import { cadastro } from '../cadastro'
import { ALUNOS } from '../mock-cadastro'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  alunos = ALUNOS
  selectedAluno?: cadastro

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(cadastro: cadastro): void {
    this.selectedAluno = cadastro;
    }

}
