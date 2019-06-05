import { LoggingService } from "./logging.service";
import { Injectable, EventEmitter } from "@angular/core";

//Uma outra aplicação para serviços é armazenar e administrar nossos dados.  Por enquanto há um array no app.component com os accounts onde temos essa cadeia de properties e event Binding para levar dados para o app-component para então atualizarmos nossas accounts. Um serviço para isso será criado aqui.

//Se deseja usar um serviço dentro de algo esse algo deve ter um metadata anexado a ele. Um component tem metadata "@Component". Uma directive tem metadata pois tem @Directive. Serviço não tem metadata. É como Angular trabalha. é preciso anexar uma matadata específico para essa situação: @Injectable(). Injectable não deve ser incluído no serviço que deseja injetar em outros. Deve ser colocado no serviço onde será injetado (recebe o serviço). Se não se deseja injetar algo em um serviço então não se coloca @injectable.  

@Injectable()
export class AccountsService {
    accounts = [
        {
        name: 'Master Account',
        status: 'active'
        },
        {
        name: 'Testaccount',
        status: 'inactive'
        },
        {
        name: 'Hidden Account',
        status: 'unknown'
        }
    ];

    //Queremos prover um event que podemos trigger em um component e listen to em outro component

    statusUpdated = new EventEmitter<string>();
    //Agora podemos trigger este eventEmmiter em qualquer component onde este serviço possa ser injetado.

    constructor(private loggingService: LoggingService){}

addAccount(name:string, status: string){
this.accounts.push({name: name, status: status});
this.loggingService.logStatusChange(status);
}   

updateStatus(id: number, status: string){
    this.accounts[id].status = status; 
    this.loggingService.logStatusChange(status);

} 
}