import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

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
    'https://lh3.googleusercontent.com/proxy/yKsLvM6OE0ovpAs73VXCbFn-JlxOFLm0iX3nuAQFWoE_Zh-IPhnDfqE6AtUKZe5lJlXdputTIdPsEdJ6gYRNWWXPoi5YH8LKwj-ikgd-_PzDfss9rAfYrYyWtb34ftUEbLks-WRBDVD0cBOTbiPwljTuvtBN971eOYi2B1milFqtMOE076a7skpH06I6p7I',
    [
      new Ingredient('Buns', 2),
      new Ingredient('Meat', 1)
    ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }


}
