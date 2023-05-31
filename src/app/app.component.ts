import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Hugo';

  dados = {
    dataNascimento:"26/09/1980",
    sexo: "Masculino"
  }

  informacoes = {
    email:'hugobrambati@gmail.com',
    cargo: "ADM",
  }

  escolaridade = {
    nivel:"Graduação",
    curso: "Analise e Desenvolvimento de Sistemas"
  }

  title = 'curso_angular';
}
