import {
  Component,
  ElementRef,
  Output,
  ViewChild,
  EventEmitter,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/model/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @Output('editData') editData = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  addClik() {
    this.editData.emit(
      new Ingredient(
        this.nameInput.nativeElement.value,
        this.amountInput.nativeElement.value
      )
    );
  }
}
