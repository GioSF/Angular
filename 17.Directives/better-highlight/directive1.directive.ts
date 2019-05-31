import { Directive, HostBinding, OnInit, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDirective1]'
})
export class Directive1Directive implements OnInit{

  @Input() defaultColor: string = 'transparent';
  //Aqui um alias. Torna este Input apto a receber valores aplicados a appDirective1 no DOM
  @Input('appDir') highlightColor: string = 'yellow';

//Entre aspas simples pois elementos do DOM não reconhece hífen
//Informa ao Angular para que, no elemento onde se encontra a directive, acesse a propriedade style e depois uma bub-propriedade, backgroundColor, e setamos este estilo para qualquer vaor existente na variável backgroundColor: string.
//  @HostBinding('style.backgroundColor') backgroundColor: string = 'pink';
//Em Angular eiste: event binding, property binding, two-way binding e String Interpolation

  @HostBinding('style.backgroundColor') backgroundColor: string;

//ElementRef: nos dá acesso ao elemento
  constructor(private elRef: ElementRef, private renderer: Renderer2) {

    }

  @HostListener('mouseenter') mouseenter(dataEvent: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow')
    this.backgroundColor = this.defaultColor;
  }

  ngOnInit(){
    //Utilize essa área para iniciar valores quando a classe é instanciada.
    //Inicialmente, defaultColor é 'transparent'. Para alterar isso basta:
    this.backgroundColor = this.defaultColor;

  }

}
