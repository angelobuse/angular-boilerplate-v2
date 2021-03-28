import { Component, OnInit,  ViewChild, ElementRef } from '@angular/core';
import { Account } from '../account.model';
import { LoggingService } from '../shared/logging.service';
import { AccountService } from '../shared/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {

  @ViewChild('name', { static: false }) nameInputRef!: ElementRef;
  @ViewChild('status', { static: false }) statusInputRef!: ElementRef;

  constructor(private loggingService: LoggingService, private createAccount: AccountService) { }

  ngOnInit(): void {
  }

  addAccount() {
    const name = this.nameInputRef.nativeElement.value;
    const status = this.statusInputRef.nativeElement.value;
    const newAccount = new Account(name, status);
    this.createAccount.onCreateAcc(newAccount);
    // this.loggingService.logStatus(this.statusInputRef.nativeElement.value)
  }
}
