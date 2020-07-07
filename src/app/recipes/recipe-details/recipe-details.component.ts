import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  id: number;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router){}
  recipeKishor: Recipe;    
  ngOnInit() {        
      this.route.params.subscribe(
          (param: Params)=>{
            this.id = +param['id'];
            this.recipeKishor = this.recipeService.getRecipe(this.id);
          }
      )     
  }

  onAddToShoppingList(){
    this.recipeService.addIngrideants(this.recipeKishor.ingrediants);  
  }

  onEditRecipe(){      
      this.router.navigate(['edit'], {relativeTo: this.route});
  }
  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}
