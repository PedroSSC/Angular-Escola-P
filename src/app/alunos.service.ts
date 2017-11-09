import { Injectable } from '@angular/core';
import { Aluno } from './aluno.model';

@Injectable()
export class AlunosService {
  protected alunos: Array<Aluno>;

  constructor() {
    this.alunos = [
      new Aluno(1, 'Alberto', 1),
      new Aluno(2, 'Benicio', 2),
      new Aluno(3, 'Carla', 3),
      new Aluno(4, 'Daniel', 1),
      new Aluno(5, 'Eduardo', 2),
      new Aluno(6, 'Fernanda', 3),
      new Aluno(7, 'Gabriel', 2),
      new Aluno(8, 'Hugo', 3)
    ];
  }

  getAlunos(): Array<Aluno> {
    let lista = this.alunos;
    return lista;
  }

  getCodAluno(cod: number): Aluno{
    for (let i = 0; i<=this.alunos.length; i++){
      if(cod === this.alunos[i].cod){
        return this.alunos[i];
      }
    }
    return null;
  }
}