import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HeroesService} from "../../servicios/heroes.service";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe:any[]=[];

  constructor(private _activatedrouted:ActivatedRoute,
              private _heroeservicio:HeroesService) {

    this._activatedrouted.params.subscribe(params =>{
      this.heroe = _heroeservicio.getHeroe(params['id']);
      console.log(this.heroe);
    });
  }

  ngOnInit() {
  }

}
