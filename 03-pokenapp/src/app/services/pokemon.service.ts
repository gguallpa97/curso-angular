import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  // Injectable sin necesidad de instanciarlo
  providedIn: 'root',
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2';
  // private pokemonLista: Array<any> = [];
  constructor(private http: HttpClient) {}

  getLista(pagina: number = 0) {
    return this.http.get(`${this.baseUrl}/pokemon/?offset=${pagina}&limit=8`);
    /*return this.http.get(`${this.baseUrl}/pokemon/`, {
      params: {
        offset: pagina,
        limit: 8
      }
    });*/
  }

  getPokemonData(name: string) {
    // `` Template string
    return this.http.get(`${this.baseUrl}/pokemon/${name}`);
  }
}
