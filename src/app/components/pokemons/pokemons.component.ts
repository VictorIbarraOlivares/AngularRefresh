import { Component, OnInit } from '@angular/core';
import { PokeAPIService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {
  Pokemons:any = [];
  constructor(
    private PokeService: PokeAPIService
  ) { }

  ngOnInit(): void {
    this.getAllPokemons();
  }
  getAllPokemons() {
    this.PokeService.getPokemons().subscribe(pokemons => {
      console.log(pokemons);
      this.Pokemons = pokemons;
    })
  }
}
