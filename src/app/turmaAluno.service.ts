import { Injectable } from '@angular/core';
import { Aluno } from './aluno.model';
import { Turma } from './turma.model';
import { TurmaAluno } from './turmaAluno.model';

@Injectable()
export class TurmaAlunoService {
  protected turmaAluno: Array<TurmaAluno>;

  constructor() {
    this.turmaAluno = [
      new TurmaAluno('001',1),
      new TurmaAluno('001',2),
      new TurmaAluno('002',1),
      new TurmaAluno('002',3),
      new TurmaAluno('003',2),
      new TurmaAluno('003',3)

    ];
  }

  getTurmaAluno(): Array<TurmaAluno> {
    let lista = this.turmaAluno;
    return lista;
    
  }
}