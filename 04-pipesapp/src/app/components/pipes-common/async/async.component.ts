import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent implements OnInit {
  img = new Promise ( (resolve, reject) => {
    resolve('https://angular.io/assets/images/logos/angular/shield-large.svg');
  });
  constructor() { }

  ngOnInit(): void {
  }

}
