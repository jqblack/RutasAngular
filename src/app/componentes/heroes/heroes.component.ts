import { Component, OnInit } from '@angular/core';
import {HeroesService} from "../../servicios/heroes.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: any[] =[];
  constructor(private _heroservices:HeroesService,
              private _router:Router) {

  }

  ngOnInit() {

    this.heroes = this._heroservices.getHeroes();
    console.log(this.heroes);
  }

  verHeroe(item:number){
    this._router.navigate(['/heroe',item]);
  }

}
