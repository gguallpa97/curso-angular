import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  info: any;
  url = '';

  // Estado inicial de mi app
  constructor(private pokemonService: PokemonService) { }

  // Primero se procese bien la apps luego se inicia
  ngOnInit(): void {
      this.pokemonService.getPokemonData(this.info.name).subscribe((res: any) => {
        this.url = res.sprites.front_default;
      });
  }

}
