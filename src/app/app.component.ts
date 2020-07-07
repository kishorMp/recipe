import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipes/recipe.service';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(){    
      firebase.initializeApp({
          apiKey : "AIzaSyBvJziTt2nBeb-rGBn7EEF6AlCWfi788Q8",
          authDomain : "ng-recipe-book-4c172.firebaseapp.com"
      });
  }

  loadedFeature = 'recipe';

  onNavigator(selectors: string){    
      this.loadedFeature = selectors;
  }
}
