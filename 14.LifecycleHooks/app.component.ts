import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'TestServer', content: "Just a test"}];

/*   onServerAdded está apto a get evento (serverData) com objetos js serverName e serverContent que serão os tipos de dados que esperamos receber nesse método.
Pegamos esses dados onServerAdded e chamamos onServerAdded qdo um evento ocorrer no cockpitComponent. Esse evento nos dá o estado que esperamos to get e catch ele com um $event.

O evento será emitido pelo cockpit.
 */

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChangeFirst(){
    this.serverElements[0].name = 'Changed#';
  }

  ngOnDestroyFirst(){
    console.log('ngOnDestroy called');
    this.serverElements.splice(0, 1);
  }


}