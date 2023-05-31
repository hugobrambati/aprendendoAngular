import { Component } from '@angular/core';

@Component({
  selector: 'app-first-componet',
  templateUrl: './first-componet.component.html',
  styleUrls: ['./first-componet.component.css']
})
export class FirstComponetComponent {

  name: string = "Hugo";
  idade: number = 42;
  profissao = "Estudante"
  hobbie = ["Jogar", "Passear","Viajar"]
  car = {
    fabricante: "Fiat",
    modelo:"Ideia",
    ano: "2015",
    tipo: "16V"
  }
}
