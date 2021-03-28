import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  numbers = [1, 2, 3, 4, 5, 6];
  oddNumbers: number[] =[1, 3, 5];
  evenNumbers = [2, 4, 6];

  value = 10;

  onlyOdd = false;

  constructor() { }

  ngOnInit(): void {
  }



}
