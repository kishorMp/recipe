import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.ListIngredient();

    this.subscription = this.slService.ingredientChanges.subscribe(
        (ingre: Ingredient[])=>{
          this.ingredients = ingre;
        }
      )      
  }
  onEditItem(index: number){
      this.slService.startedEditing.next(index);
  }

   ngOnDestroy(){
     this.subscription.unsubscribe();
   } 
  // onIngredientAdded(ingrediant: Ingredient)
  // {    
  //   this.ingredients.push(ingrediant);
  // }

}
