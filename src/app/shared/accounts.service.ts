import { LoggingService } from './logging.service';
import { Injectable } from "@angular/core";

@Injectable()
export class AccountService{

  accounts = [
    {name:'Master account1', status:'unknown'},
    {name:'Master account2', status:'known'},
  ]

  constructor(private loggingService: LoggingService){}
  onCreateAcc(newAccount: any) {
    this.accounts.push(newAccount)
    this.loggingService.logStatus(newAccount.status);
  }

  onUpdateStatus(newStatus: any) {
    this.accounts[newStatus.id].status = newStatus.status;
    this.loggingService.logStatus(newStatus.status)
  }

}
