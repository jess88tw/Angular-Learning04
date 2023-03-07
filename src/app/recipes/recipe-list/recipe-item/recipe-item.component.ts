import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input('recipe') recipe: Recipe;

  @Output('recipeSellect') recipeSellect = new EventEmitter<void>();

  onRecipeClik() {
    this.recipeSellect.emit();
  }
}
