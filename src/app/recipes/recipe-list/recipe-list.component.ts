import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../../shared/model/recipe.model';
import { RecipeService } from './../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  addRecipe() {
    this.recipes.push(this.recipeService.food2);
  }
}
