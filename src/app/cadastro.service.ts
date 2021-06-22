import { Injectable } from '@angular/core';
import { ALUNOS } from './mock-cadastro'
import { Observable, of } from 'rxjs';
import { cadastro } from './cadastro'
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class CadastroService {

  private alunosUrl = 'http://localhost:3000/alunos';

  constructor( private http: HttpClient, private messageService: MessageService) { }


  getAlunos(): Observable<cadastro[]> {
    return this.http.get<cadastro[]>(this.alunosUrl)
      .pipe(
        tap(_ => this.log('fetched alunos')),
        catchError(this.handleError<cadastro[]>('getAlunos', []))
      )
  }

  getcadastro(id: number): Observable<cadastro> {
    const url = `${this.alunosUrl}/${id}`
    return this.http.get<cadastro>(url).pipe(
      tap(_ => this.log(`fetched alunos id=${id}`)),
      catchError(this.handleError<cadastro>(`getcadastro id=${id} `))
    );
  }

  private log(message: string) {
    this.messageService.add(`Service: ${message}`)
  }

  private handleError<T>(operation = 'operarion', result?: T) {

    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed: ${error.message}`)

      return of(result as T)
    }
  }

}
