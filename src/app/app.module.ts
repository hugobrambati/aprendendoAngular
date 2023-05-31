import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponetComponent } from './components/first-componet/first-componet.component';
import { SecondComponentComponent } from './components/second-component/second-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DiretivasComponent } from './component/diretivas/diretivas.component';
import { DiretivaComponent } from './components/diretiva/diretiva.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponetComponent,
    SecondComponentComponent,
    ParentDataComponent,
    DiretivasComponent,
    DiretivaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
