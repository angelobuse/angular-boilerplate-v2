import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from './shared/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers: [AccountService]
})
export class AppComponent implements OnInit {
  serverElements: any[] = [{ type: 'server', name: 'Test server', content: 'Just a content' }];

  evenNumbers: number[] = [];
  oddNumbers: number[] = [];

  accounts: { name: string, status: string }[] = [];

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }

  onServerAdded(serverData: {serverName:string, serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    })
  }

  onBlueprintAdded(blueprintData: {serverName:string, serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    })
  }

  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
    }
    else {
      this.oddNumbers.push(firedNumber);
    }
  }

}
