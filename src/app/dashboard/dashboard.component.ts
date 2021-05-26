import { Component, OnInit } from '@angular/core';
import { cadastro } from '../cadastro'
import { CadastroService } from '../cadastro.service'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  alunos: cadastro[] = []

  constructor(private CadatrosService: CadastroService) { }

  ngOnInit() {
    this.getAlunos()
  }

  getAlunos(): void {
    this.CadatrosService.getAlunos()
      .subscribe(alunos => this.alunos = alunos.slice(1, 4))
  }
}
