//Aqui informamos ao Angular quais pedaços pertencem ao meu app e aqui temos que adicionar alguma coisa ao imports para importar um outro pacote do Angular

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
  //Após o import acima podemos adicionar no array imports abaixo FormsModule. É um feature entendido pelo Angular pois ś parte do módulo Angular (NgModular) e ele diz ao Angular que queremos importar algumas features de form
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
