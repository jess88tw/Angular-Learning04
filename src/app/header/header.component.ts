import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output('naviagte')
  naviagte = new EventEmitter<string>();

  collapsed = true;
  feature = 'recipes';

  recipesClik() {
    this.feature = 'recipes';
    this.naviagte.emit(this.feature);
  }

  shoppingListClik() {
    this.feature = 'shopping-list';
    this.naviagte.emit(this.feature);
  }
}
