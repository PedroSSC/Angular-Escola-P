import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListaDeTurmasComponent } from './lista-de-turmas/lista-de-turmas.component';
import { TurmasService } from './turmas.service';
import { DisciplinasService } from './disciplinas.service';
import { AlunosService } from './alunos.service';
import { TurmaAlunoService } from './turmaAluno.service';
import { ListaDeAlunoComponent } from './lista-de-aluno/lista-de-aluno.component';

@NgModule({
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
        FormsModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        ListaDeTurmasComponent,
        ListaDeAlunoComponent,
    ],
    providers: [
        TurmasService,
        DisciplinasService,
        AlunosService,
        TurmaAlunoService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
