import { Ingredient } from '../shared/ingredient.model';
// import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
export class ShoppingListService {
   // ingredientChanges = new EventEmitter<Ingredient[]>();
   ingredientChanges = new Subject<Ingredient[]>();
   startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];
      onAddIngredient(ingredient: Ingredient){          
            this.ingredients.push(ingredient);           
            this.ingredientChanges.next(this.ingredients.slice());
      }    
     getIngredient(index: number){
      return this.ingredients[index];
     }
     deleteIngredient(index: number){
            this.ingredients.splice(index,1);
            this.ingredientChanges.next(this.ingredients.slice());
     }
     updateIngredient(index: number, newIngre: Ingredient){
         this.ingredients[index] = newIngre;
         this.ingredientChanges.next(this.ingredients.slice());
     }
     ListIngredient(){
        return this.ingredients.slice();     
        // return this.ingredients;  // This is work but i want to use slice function and add this
     } 
     
     AddIngrideants(ingredient: Ingredient[]){
            // for (let ingre of ingredient){
            //     this.onAddIngredient(ingre);
            // }
            // console.log(ingredient);
            this.ingredients.push(...ingredient);
            // this.ingredientChanges.emit(this.ingredients.slice());
            this.ingredientChanges.next(this.ingredients.slice());
           // this.ingredients.push(ingredient.slice());
            
     }
}