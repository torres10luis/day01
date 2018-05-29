import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  yetAnotherStr; // type undefined
  anotherStr: string;
  title = 'my first website';

  str: string;


  ngOnInit() {
    this.str = 'this is a 4';

    this.anotherStr = 'this is srting';

    this.yetAnotherStr = 4;

    this.test();

    this.numberArrayInput([]);
    this.numberArrayInput([5]);
    this.numberArrayInput([5, 10, 15]);

    this.anyArrayInput([]);
    this.anyArrayInput([5]);
    this.anyArrayInput([5, 10, 15]);
    this.anyArrayInput(['string',5]);

  }

  test() {
    let name: string = 'test user';
    let age: number = 30;
    let text: string = `My name is ${name} and i am ${age} years old`;
    console.log(text);
  }
  numberArrayInput(x: number[]) {
    console.log(x);
  }
  anyArrayInput(x: Array<any>) {
    console.log(x);
  }
}
