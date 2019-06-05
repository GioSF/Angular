import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

//Conteúdo de @Component é metadata
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService]
})
export class AppComponent implements OnInit  {
  //Implementar serviço:

  accounts: {name: string, status: string}[] = [];

  constructor(private accountsService: AccountsService){}

  ngOnInit(){
    //Inicialização deve ser feita aqui e não no constructor
    //this.accountsService.accounts está disponível como property por conta do constructor.
    //this.accountsService.accounts é um array, é um reference type e o sinal de = fornece a this.accounts uma exata referencia ao array de this.accounts.service
    this.accounts = this.accountsService.accounts;
  }


  /*   accounts = [
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

  onAccountAdded(newAccount: {name: string, status: string}) {
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  } */

}
