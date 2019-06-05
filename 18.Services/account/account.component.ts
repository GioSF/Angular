import { Component, Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

//Conteúdo de @Component é metadata
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //Este array providers "overwrite" os serviços que vem do appComponent. Criam outras instâncias do serviço provido pelo AppComponent que são diferentes da instância do serviço criado pelo appComponent. Se quiser utilizar a instância de serviço de appComponent basta remover o serviço desta lista de providers. Mas é preciso manter o serviço no import e no contructor pois o serviço é necessário aq ui.
  //Aqui também  é preciso informar ao Angular como criar LoggingService
  //providers: [LoggingService, AccountsService]

  //Comentar providers aqui após incluir serviço no appModule
  //providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  //@Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

//Injetar serviço aqui também
  constructor(private loggingService: LoggingService, private accountsService: AccountsService){}

  onSetTo(status: string) {
//    this.statusChanged.emit({id: this.id, newStatus: status});
//this.id é o instance member
    this.accountsService.updateStatus(this.id, status);
    //Podemos usar o serviço (eventEmmiter) do accounts.service pois ele está "injectable" aqui. Este emit será listened no new-account.
    this.accountsService.statusUpdated.emit(status);
      //Comentar console para não chamar o serviço aqui
    //console.log('A server status changed, new status: ' + status);
  }
}
