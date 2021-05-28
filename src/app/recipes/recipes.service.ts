import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class RecepisService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Tasty Shcnizel',
    'Description',
    'https://v.img.com.ua/b/orig/9/9b/6c23f6f96b1f54301bf08988f50e39b9.jpg',
    [
      new Ingredient('Meat', 1),
      new Ingredient('Grench Fries', 20),
    ]),
    new Recipe('Big Fat Burger',
    'Description',
    'https://i.insider.com/5d8ca1222e22af53447766c2?width=1100&format=jpeg&auto=webp',
    [
      new Ingredient('Buns', 2),
      new Ingredient('Meat', 1)
    ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShopList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

}
