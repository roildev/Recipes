import { Recipe } from './../recipe.model';
import { Component, OnInit, Input } from '@angular/core';
import { RecepisService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(
    public recepisService: RecepisService
  ) { }

  ngOnInit(): void {
  }

}
