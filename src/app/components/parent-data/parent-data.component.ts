import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {
  @Input() name: string = '';
  @Input() informacoes!: {email: string, cargo: string};
  @Input() dados!: {dataNascimento: string, sexo: string}
  @Input() escolaridade!: {nivel: string, curso: string}

  ngOnInit(): void {
      
  }

}
