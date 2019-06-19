import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HeroesService} from "../../servicios/heroes.service";

@Component({
  selector: 'app-herobuscado',
  templateUrl: './herobuscado.component.html',
  styleUrls: ['./herobuscado.component.css']
})
export class HerobuscadoComponent implements OnInit {

  heroes : any[]= [];

  constructor(private _activatedrouter : ActivatedRoute,
              _heroservice: HeroesService) {
              this._activatedrouter.params.subscribe(param=>{this.heroes = _heroservice.buscarHeroes(param['nom']);
              console.log(this.heroes);
    });
  }

  ngOnInit() {
  }

}
