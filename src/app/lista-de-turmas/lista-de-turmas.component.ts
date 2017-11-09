import { Component, OnInit } from '@angular/core';
import { Turma } from '../turma.model';
import { Disciplina } from '../disciplina.model';
import { TurmasService } from '../turmas.service';
import { DisciplinasService } from '../disciplinas.service';
import { AlunosService } from '../alunos.service';
import { TurmaAlunoService } from '../turmaAluno.service';

@Component({
  selector: 'app-lista-de-turmas',
  templateUrl: './lista-de-turmas.component.html',
  styleUrls: ['./lista-de-turmas.component.css']
})
export class ListaDeTurmasComponent implements OnInit {
  turmas = [];
  disciplinas = [];
  anos = [];
  alunos = [];
  turmaAlunos = [];
  q = null;
  filtroPorAno = null;
  filtroPorDisciplina = null;
  selectedTurma = null;
  

  constructor(private turmasService: TurmasService, 
              private disciplinasService: DisciplinasService, 
              private alunosService: AlunosService, 
              private turmaAlunoService: TurmaAlunoService) {}


  ngOnInit() {
    this.turmas = this.turmasService.getTurmas();
    this.disciplinasService.getDisciplinas().subscribe(disciplinas => this.disciplinas = disciplinas);
    this.anos = [2015, 2016, 2017];
    this.alunos = this.alunosService.getAlunos();
    this.turmaAlunos = this.turmaAlunoService.getTurmaAluno();
  }

  excluir(turma: Turma) {
    this.turmasService.delete(turma.codigo);
    this.atuarlizarLista();
  }

  removerFiltroPorAno() {
    this.filtroPorAno = null;
    this.atuarlizarLista();
  }

  removerFiltroPorDisciplina() {
    this.filtroPorDisciplina = null;
    this.atuarlizarLista();
  }

  filtrarPorAno(ano: number) {
    this.filtroPorAno = ano;
    this.atuarlizarLista();
  }

  filtrarPorDisciplina(disciplina: string) {
    this.filtroPorDisciplina = disciplina;
    this.atuarlizarLista();
  }

  pesquisar() {
    this.atuarlizarLista();
  }

  atuarlizarLista() {
    this.turmas = this.turmasService.getTurmas(this.q, this.filtroPorDisciplina, this.filtroPorAno);
  }

  selecionado(turma: Turma){
    this.selectedTurma = this.turmasService.selectTurma(turma);
  }
}
