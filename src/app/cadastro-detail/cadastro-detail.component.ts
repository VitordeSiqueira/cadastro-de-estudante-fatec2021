import { Component, OnInit, Input } from '@angular/core';
import { cadastro } from '../cadastro'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-cadastro-detail',
  templateUrl: './cadastro-detail.component.html',
  styleUrls: ['./cadastro-detail.component.css']
})
export class CadastroDetailComponent implements OnInit {

  @Input() cadastro?: cadastro;

  selectedAluno?: cadastro

  constructor(
    private route: ActivatedRoute,
    private CadastroService: CadastroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getcadastro();
  }
  
  getcadastro(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.CadastroService.getcadastro(id)
      .subscribe(cadastro => this.cadastro = cadastro);
  }

  goBack() {
    this.location.back()
  }
}