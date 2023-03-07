import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loadFeature = 'recipes';

  naviagte(naviagte: string) {
    this.loadFeature = naviagte;
  }

  showRecipes() {
    return this.loadFeature === 'recipes' ? true : false;
  }

  showShoppingList() {
    return this.loadFeature === 'shopping-list' ? true : false;
  }
}
