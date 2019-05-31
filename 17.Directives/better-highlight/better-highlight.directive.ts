import { Directive, Renderer2, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue',)
  }

  //PAra maior interação mudar a cor oom hover

  //Mouseover será disparado quando um event ocorrer. "mouseenter" é um dos eventos oficiais suportados pelo elemento DOM onde se encontra essa diretiva. Existem todos os events disponíveis e pode-se usar com eventbinding antes.
  //eventData mas pode listen a eventos customizados e retornar aqueles dados. Pode clicar ou passar o mouse por cima e o método é passado dentro de aspas. Isso acontece abaixo. @HostListener é apenas um jeito conveninente de listening to events no element

  //Uma lista de eventos do DOM:
  //https://developer.mozilla.org/pt-BR/docs/Web/Events
  
  @HostListener('mousemove') mousemove(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
  }

     @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')
  }

}
