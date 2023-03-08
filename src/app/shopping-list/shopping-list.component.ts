import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/model/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Salt', 10),
  ];

  addItem(item: Ingredient) {
    this.ingredients.push(item);
  }

  constructor() {}

  ngOnInit(): void {}
}
