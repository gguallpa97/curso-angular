import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  mensajes: any;
  constructor(private dataService: DataService) { }
  id: number;

  ngOnInit(): void {
    this.mensajes = this.dataService.getPosts();
  }
  escuchaClick(id: number) {
    console.log('Click en ', this.id = id);
  }
}
