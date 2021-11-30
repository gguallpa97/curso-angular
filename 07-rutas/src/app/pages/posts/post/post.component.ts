import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  // @Input('men') mensaje;
  @Input() mensaje;
  @Output() clickPost = new EventEmitter<number>();

  constructor() { }

  onClick() {
    // console.log(this.mensaje.id)
    // emitir al padre.
    this.clickPost.emit(this.mensaje.id);
  }

}
