import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  recipesArray: Recipe[] = [
    new Recipe('First Recipe', 'Description', 'https://c.pxhere.com/photos/b6/a1/esfiha_kibe_tidbits_snacks_power_supply-1375826.jpg!d'),
    new Recipe('First Recipe', 'Description', 'https://c.pxhere.com/photos/b6/a1/esfiha_kibe_tidbits_snacks_power_supply-1375826.jpg!d')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
