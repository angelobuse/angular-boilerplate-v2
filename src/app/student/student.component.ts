import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Output() sendNotification = new EventEmitter<string>();
  notification:any;
  message: string = 'Hello please act upon the request sent from ';
  name: string = 'Angelo Thomas';


  constructor() { }

  ngOnInit(): void {
  }

  reqSubmitted() {
      this.notification = setInterval(() => {
      this.sendNotification.emit(this.message + this.name);
    }, 5000)
  }

}
