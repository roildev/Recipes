import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameIngredient', {static: false}) nameIngredient: ElementRef;
  @ViewChild('amountIngredient', {static: false}) amountIngredient: ElementRef;

  constructor(
    private slService: ShoppingListService
  ) { }

  ngOnInit(): void {
  }
  onAddItem() {
    const ingName = this.nameIngredient.nativeElement.value;
    const ingAmmount = this.amountIngredient.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmmount);
    this.slService.addNewIng(newIngredient);
  }

  onDeleteItem() {
    console.log(this.nameIngredient.nativeElement.value);
  }
}
