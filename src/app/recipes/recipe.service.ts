import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';
@Injectable()

export class RecipeService{
    constructor(private slService: ShoppingListService){}
     recipeSelected = new EventEmitter<Recipe>();    
     recipesChanged = new Subject<Recipe[]>();  //1
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 
        'http://localhost/Angular/Receipe/src/images/recipe/Recipe_logo.jpeg',
        [ new Ingredient('Apple',3),
          new Ingredient('Orange',5) 
        ]),
        new Recipe('Another Test Recipe', 'This is simply another test', 
        'http://localhost/Angular/Receipe/src/images/recipe/Recipe_logo.jpeg',
        [ new Ingredient('Mango',1), 
          new Ingredient('Banana',8)
        ])
      ]; 

      addRecipe(recipe: Recipe){        
        this.recipes.push(recipe);        
        this.recipesChanged.next(this.recipes.slice()); //2
      }
      updateRecipe(index: number, newRecipe: Recipe){        
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice()); // 2
      }
      setRecipes(recipe: Recipe[]){
          this.recipes = recipe;  // Replace new recipes in recipes array;
          this.recipesChanged.next(this.recipes.slice());
      }
      getRecipes(){
        return this.recipes.slice();
      }   
     
      onRecipeData(){
         return this.recipes.slice();
      }

      addIngrideants(ingrediant: Ingredient[]) {
        this.slService.AddIngrideants(ingrediant);          
      }
      getRecipe(index: number){
          return this.recipes[index];
      }
      deleteRecipe(index: number){
          this.recipes.splice(index,1);
          this.recipesChanged.next(this.recipes.slice());
      }
         
}