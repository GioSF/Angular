import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  //Sempre que essa condição (algum parâmetro de entrada) mudar o método seguinte (unless) será executado. Isso ainda é uma proprieade. É apenas o setter dessa proprieadade que é um método e que é executado sempre que algo fora dessa directive é mudado

  //método precisa ter o mesmo nome da directive
  @Input() set appUnless(condition: boolean){
    if(!condition){
      //Cria um view nesse view container e o view é simplesmente o templateRef
      this.templateRef.createEmbeddedView(this.templateRef);
    }else{
      //Se a condição é verdadeira, clear destroi todas as views no container (desse lugar no DOM).
      this.vcRef.clear();

    }

  }

  //TemplateRef: nos dá acesso ao template
  //O segundo argumento é o view container, onde deve ser renderizado. Isso  marco o lugar onde a directive será colocada no documento. Angular marca esse lugar e ele pode ser inspecionado no developer tools 
  //Template é o quê e view é o onde.
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}