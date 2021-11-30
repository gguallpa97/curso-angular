import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-reactive-event',
  templateUrl: './reactive-event.component.html',
  styleUrls: ['./reactive-event.component.css']
})
export class ReactiveEventComponent implements OnInit, OnDestroy {
  subscriptor: Subscription | null = null;
  x = 0;
  y = 0;
  constructor() { }

  ngOnInit(): void {
    const obs = fromEvent<MouseEvent>( document.querySelector('#area') , 'mousemove');
    this.subscriptor = obs.subscribe( (ev) => {
      this.x = ev.clientX;
      this.y = ev.clientY;
    });
  }

  ngOnDestroy(): void{
    this.subscriptor.unsubscribe();
  }

}
