import { Directive, ElementRef, OnInit } from '@angular/core';

//Decorator
//Temos que infomrar o Angular sobre a nova directive. Assim como com Components, Angular não escaneia todos oss arquivos. Então é preciso ir a appModule
@Directive({
    //selector: colocamos directivas em nosso templates para anexar a elementos. Damos essa instrução ao Angular através do selector.
    // o [] será reconhecimedo em um elemento html
    selector: '[appBasicHighlight]'
})

export class BasicHighlightDirective  implements OnInit{
    
    //Nós podemos injetar o elemento ao qual a diretiva se apoia com esta diretiva. É uma forma de se obter fácil acesso a outras classes sem ter que instanciá-las. Angluar precisa de argumentos para instanciar essa classe, 

    constructor(private elementRef: ElementRef){
        //Quando se coloca um arumento na função Angular vai tentar passar esse argumento sempre que uma classe for instanciada. Nesse caso é uma referência ao elemento no qual a diretiva foi colocada (ElementRef).

        //Assim como o componente, a directive possui o ciclo de vida do ng OnInit
        this.elementRef.nativeElement

    }

    ngOnInit(){
        // Estamos tendo acesso à elemento no qual a directive foi colocada e depois estamos overwritting o style.
        //Isso faz com que a aplicação tenha acesso ao DOM o que não é bom.
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }

}