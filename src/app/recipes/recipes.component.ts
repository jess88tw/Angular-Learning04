import { Recipe } from '../shared/model/recipe.model';
import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
  recipeSellect: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.recipeSellect.subscribe((recipe: Recipe) => {
      this.recipeSellect = recipe;
    });
  }

  // selectRecipe(recipeData: Recipe) {
  //   this.recipeSellect = recipeData;
  // }
}
