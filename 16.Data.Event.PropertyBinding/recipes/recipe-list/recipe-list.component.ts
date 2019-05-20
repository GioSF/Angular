import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  //Não se pode listen a um evento de um filho de um filho. Events não propagam para além do filho.

  @Output() recipeWasSelected = new EventEmitter<Recipe>();


  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Outra receita de teste', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
    
  }

  constructor() { }

  ngOnInit() {
  }

}
