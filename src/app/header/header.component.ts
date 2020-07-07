// import { Component, Output, EventEmitter, ViewChild } from "@angular/core";
import { Component } from "@angular/core";
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    constructor(private dataStorage: DataStorageService){}  
    onSaveRecipeData(){        
            this.dataStorage.StoreRecipes()
            .subscribe(
                (response: Response)=>{
                        console.log(response);
                }
            )
            
    }
    onFetchData(){
        this.dataStorage.getRecipes();
    }
}