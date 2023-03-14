import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/model/ingredient.model';
import { Recipe } from '../shared/model/recipe.model';

@Injectable()
export class RecipeService {
  recipeSellect = new EventEmitter<Recipe>();

  food1 = new Recipe(
    'Hambuger',
    'A hamburger.',
    'https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium',
    [
      new Ingredient('meat', 1),
      new Ingredient('lettuce', 1),
      new Ingredient('Tomato', 0.5),
    ]
  );

  food2 = new Recipe(
    'bagel',
    'A bagel.',
    'https://i0.wp.com/www.hmfood.com/wp-content/uploads/DSC09257-scaled.jpg',
    [
      new Ingredient('Blueberry jam', 0.3),
      new Ingredient('Parmesan', 1),
      new Ingredient('Buns', 2),
    ]
  );

  private recipes: Recipe[] = [this.food1];

  getRecipes() {
    // copy array and return
    return this.recipes.slice();
  }
}
