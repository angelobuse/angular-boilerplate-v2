import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  //Properties from app component
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent:string }>();
  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  //newServerName = '';
  //newServerContent = '';

  @ViewChild('ServerContentInput', { static: true }) ServerContentInput!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }


  onAddServer(ServerName: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: ServerName.value,
      serverContent: this.ServerContentInput.nativeElement.value
    });
  }

  onAddBlueprint(ServerName: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: ServerName.value,
      serverContent: this.ServerContentInput.nativeElement.value
    });
  }

}
