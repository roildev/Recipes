import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  nameRecipe = '';

  constructor() { }

  ngOnInit(): void {
  }

  ShowDescription(nameRecipe) {
    this.nameRecipe = nameRecipe;
    console.log(nameRecipe)
  }
}
