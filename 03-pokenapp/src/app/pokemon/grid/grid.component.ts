import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  pokemonLista: Array<any> = [];

  pagina = 0;



  constructor( private pokemonService: PokemonService) {
    this.setData();
  }

  ngOnInit(): void {
  }

  setData(){
    this.pokemonService.getLista(this.pagina).subscribe( (res: any) => {
      // console.log(res);
      this.pokemonLista = res.results;
    });
  }
  siguientePagina(){
    this.pagina += 8;
    this.setData();
  }
  anteriorPagina(){
    this.pagina -= 8;
    this.setData();
  }

}
