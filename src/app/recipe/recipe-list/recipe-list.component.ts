import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipe: Recipe[] =[
    new Recipe("Strek","asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf","https://cookieandkate.com/images/2019/10/best-red-chilaquiles-recipe-3.jpg"),
    new Recipe("Ageak","asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf","https://cdn.apartmenttherapy.info/image/upload/v1564775676/k/Photo/Recipes/2019-08-how-to-juiciest-turkey-meatballs/How-to-Make-the-Best-Juiciest-Turkey-Meatballs_055.jpg"),
    new Recipe("Kavni","asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf","https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/mrtrending0470.jpg?itok=PdSpu3Af")
  ];
 
  constructor() { }

  ngOnInit() {
  }

}
