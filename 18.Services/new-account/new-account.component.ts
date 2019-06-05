import { Component } from '@angular/core';
//Typescript (e não o Angular) precisa saber de onde vem LoggingService.
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

  //providers (property): Configures the injector of this directive or component with a token that maps to a provider of a dependency. Precisamos apenas colocar o tipo daquilo que queremos provide. Ao construir o componente saberá qual serviço precisamos e como prover esse serviço.

  //Conteúdo de @Component é metadata
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //Este array providers "overwrite" os serviços que vem do appComponent. Criam outras instâncias do serviço provido pelo AppComponent que são diferentes da instância do serviço criado pelo appComponent. Se quiser utilizar a instância de serviço de appComponent basta remover o serviço desta lista de providers. Mas é preciso manter o serviço no import e no contructor pois o serviço é necessário aqui.
  // providers: [LoggingService, AccountsService]
  //Comentar providers aqui após incluir serviço no appModule
  //providers: [LoggingService]
})
export class NewAccountComponent {
//  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();
  // Como Angular instancia classes? Quem é responsável por criar componentes? Angular é reponsável. Ao inserir selectors em nosso template a quando Angular passa por estes selectors ele nos dá instâncias de nosos componenetes.  Algular precisará construir esses componentes corretamente. Então se nós definimos no constructor que nos precisamos de algum argumento, Angular econhece isso e nos tenta dar esse tipo de argumento (tipo). Precisamos de uma intancia de classe loggingService pois definimos esse tipo e isso é importante.

  //Aqui esta a Dependency Injection. Aqui é preciso colocar a classe que você quer ter injetada. Não é opcional, está no construtor. Angular utilizará o serviço de Loggingservice (através do providers, que diz ao Angular como ele instanciará esse serviço)

  //Com esse constructor, Angular sabe o que precisamos mas não sabe como nos dará o que precisamos. Precisamos fornecer um serviço. Provide significa dizer ao Angular como criar isso.
  constructor(private loggingService: LoggingService, private accountsService: AccountsService){
    //listening to account.component:
    //Acessar accounts.service, statusUpdated event, subscrbe to it pois eventEmmiter no final apenas wraps um Observable. Rebe um novo status (string) e throw um alert.
    this.accountsService.statusUpdated.subscribe((status:string) => alert('New status' + status)
    );

  }

  onCreateAccount(accountName: string, accountStatus: string) {
    //O emit é removido e no lugar é injetado o serviço no constructor e no providers    
/*     this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
 */
    //Essa chamada ao serviço pode ser feita de qualquer lugar nesse componente. Nós não precisamos instanciar a classe manualmente para utilizar o serviço. Angular faz iso para nós.
    this.accountsService.addAccount(accountName, accountStatus);
    //this.loggingService.logStatusChange(accountStatus);
    //console.log('A server status changed, new status: ' + accountStatus);
    
  }
}
