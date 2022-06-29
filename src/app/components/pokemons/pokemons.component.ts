import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokeAPIService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {
  Pokemons:any = [];
  constructor(
    private PokeService: PokeAPIService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllPokemons();
  }
  getAllPokemons() {
    this.PokeService.getPokemons().subscribe(pokemons => {
      this.Pokemons = pokemons;
    })
  }
  showPoke(id: string) {
    this.router.navigateByUrl(`pokemons/${id}`);
  }
}
