import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Recipe } from './../recipe.model';
import { RecepisService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  public recipe: Recipe;
  public id: number;

  constructor(
    private recepisService: RecepisService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.recipe = this.recepisService.getRecipe(this.id);
      console.log(this.id);
    });

  }

  onAddToShoppingLIst() {
    this.recepisService.addIngredientsToShopList(this.recipe.ingredients);
  }

}
