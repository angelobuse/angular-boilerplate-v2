import { AccountService } from './../shared/accounts.service';
import { Component, Input, OnInit } from '@angular/core';
import { LoggingService } from '../shared/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers: [LoggingService]
})
export class AccountComponent implements OnInit {


  @Input() accounts: { name: string; status: string; } | any;


  constructor(private loggingService: LoggingService, private updateStatus: AccountService) { }

  ngOnInit(): void {
  }

  changeStatus(index: number, status: string) {
    const id = index;
    const Status = status

    const newStatus = {
      id: index,
      status: status
    }
    this.updateStatus.onUpdateStatus(newStatus)
    // this.loggingService.logStatus(Status);
  }
}
