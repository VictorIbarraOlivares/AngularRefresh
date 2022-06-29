import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeAPIService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-poke-description',
  templateUrl: './poke-description.component.html',
  styleUrls: ['./poke-description.component.scss']
})
export class PokeDescriptionComponent implements OnInit {
  Pokemon: any = [];
  constructor(
    private routeActive: ActivatedRoute,
    private PokeService: PokeAPIService
  ) { }

  ngOnInit(): void {
    const id = this.routeActive.snapshot.paramMap.get('id') ?? '';
    this.PokeService.getPokemon(id).subscribe(data => {
      this.Pokemon = data;
      console.log(this.Pokemon);
    })
  }

}
