import { Component, OnInit } from '@angular/core';
import { cadastro } from '../cadastro'
import { ALUNOS } from '../mock-cadastro'
import { CadastroService } from '../cadastro.service'
import { MessageService } from '../message.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  alunos: cadastro[] = []
  selectedAluno?: cadastro

  constructor(private cadastroService: CadastroService) {}

  ngOnInit(): void {
    this.getAlunos()
  }

  onSelect(cadastro: cadastro): void {
    this.selectedAluno = cadastro;
  }

  getAlunos(): void {
    this.cadastroService.getAlunos()
      .subscribe(alunos => this.alunos = alunos)
  }

}
