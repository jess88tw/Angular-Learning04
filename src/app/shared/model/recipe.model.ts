import { Ingredient } from 'src/app/shared/model/ingredient.model';
export class Recipe {
  constructor(
    public name: string,
    public desc: string,
    public imgPath: string,
    public ingredients: Ingredient[]
  ) {}
}
