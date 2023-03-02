import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  food = new Recipe(
    'Hambuger',
    'A hamburger.',
    'https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium'
  );

  recipes: Recipe[] = [this.food];

  addRecipe() {
    this.recipes.push(this.food);
  }

  constructor() {}

  ngOnInit(): void {}
}
