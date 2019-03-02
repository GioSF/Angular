import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

/* 
É preciso criar mais 2 propriedades Output que serão eventos que podem ser emitidos.

EventEmmiter é um tipo genérico e entre o <> vc define o tipo de event data que será emitido. aqui será os dados esperados pelo app-component: um obj {serverName: string, serverContent: string}. o () chama o contructor do objeto EventEmmiter que está guardado no server created
Como parametro do @Output é possível colocar um alias para não expor o nome do event, por exemplo
 */
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('hewuoin0239fiewovn3902wfejoipdv') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  @ViewChild('newContentInput') serverContentInput: ElementRef;

  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }
/*
Aqui o método onAddServer recebe a referencia do input HTML como argumento de método.
serverContent faz referencia diretamente a um elemento do DOM (@ViewChild) o que é desaconselhado:
Use this API as the last resort when direct access to DOM is needed. Use templating and data-binding provided by Angular instead. Alternatively you can take a look at {@link Renderer2} which provides API that can safely be used even when direct access to native elements is not supported. </p> <p> Relying on direct DOM access creates tight coupling between your application and rendering layers which will make it impossible to separate the two and deploy your application into a web worker. */
  onAddServer(nameInput: HTMLInputElement){
//    console.log(this.serverContentInput)
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
  });
  }

  onAddBlueprint(nameInput: HTMLInputElement){
/* Nao é recomendado injetar dado no DOM desta forma:
    this.serverContentInput.nativeElement.value = 'Qq coisa' */
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
  });
  }

/* Com dataBinding + 
    onAddBlueprint(){
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
  });
  } */


}
