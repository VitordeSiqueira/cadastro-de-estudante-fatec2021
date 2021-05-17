import { Injectable } from '@angular/core';
import { ALUNOS } from './mock-cadastro'
import { Observable, of } from 'rxjs';
import { cadastro } from './cadastro'
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class CadastroService {

  constructor(private messageService: MessageService) { }


  getAlunos(): Observable<cadastro[]> {
    const alunos = of(ALUNOS)
    this.messageService.add('Inválido')
    return alunos
}

}
