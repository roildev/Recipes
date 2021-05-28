import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';
import { RecepisService } from './recipes.service';
import { Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecepisService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  nameRecipe = '';

  constructor(
    private recipeService: RecepisService
    ) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected
      .subscribe(
        (recipe: Recipe) => {
          this.selectedRecipe = recipe;
        }
      );
  }

  ShowDescription(nameRecipe) {
    this.nameRecipe = nameRecipe;
    console.log(nameRecipe)
  }
}
