import { Component, OnInit, Input} from '@angular/core';
import { Turma } from '../turma.model';
import { Disciplina } from '../disciplina.model';
import { TurmasService } from '../turmas.service';
import { DisciplinasService } from '../disciplinas.service';
import { AlunosService } from '../alunos.service';
import { TurmaAlunoService } from '../turmaAluno.service';

@Component({
  selector: 'app-lista-de-aluno',
  templateUrl: './lista-de-aluno.component.html',
  styleUrls: ['./lista-de-aluno.component.css']
})

@Input()
selectedTurma: Turma;


export class ListaDeAlunoComponent implements OnInit {
  turmas = [];
  alunos = [];
  turmaAlunos = [];
  sTurma = null;


  constructor(private turmasService: TurmasService, 
              private disciplinasService: DisciplinasService, 
              private alunosService: AlunosService, 
              private turmaAlunoService: TurmaAlunoService) { }


  ngOnInit() {
    this.turmas = this.turmasService.getTurmas();
    this.alunos = this.alunosService.getAlunos();
    this.turmaAlunos = this.turmaAlunoService.getTurmaAluno();
  }

  buscaAluno(cod: number):string{
    return this.alunosService.getCodAluno(cod).nome;
  }

  buscaTurma(cod: string):string{
    return this.turmasService.getTurma(cod).disciplina;
  }

  selectedTurma(turma: Turma){
    this.sTurma = this.turmasService.selectTurma(turma);
  }

}
