import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';
import { RecepisService } from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[];

  constructor(
    private recipesService: RecepisService
  ) { }

  ngOnInit(): void {
    this.recipes = this.recipesService.getRecipes();
  }

}
