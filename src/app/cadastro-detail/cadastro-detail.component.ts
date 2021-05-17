import { Component, OnInit, Input } from '@angular/core';
import { cadastro } from '../cadastro'

@Component({
  selector: 'app-cadastro-detail',
  templateUrl: './cadastro-detail.component.html',
  styleUrls: ['./cadastro-detail.component.css']
})
export class CadastroDetailComponent implements OnInit {

  @Input() cadastro?: cadastro;

  selectedAluno?: cadastro

  constructor() { }

  ngOnInit(): void {
  }

}
