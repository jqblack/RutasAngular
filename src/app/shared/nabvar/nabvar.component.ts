import { Component, OnInit } from '@angular/core';
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.css']
})
export class NabvarComponent implements OnInit {

  constructor(private _router:Router) {

  }

  ngOnInit() {
  }

  buscarHero(termino:string){
    console.log(termino);
  }

  buscarHeroe(nombre:string){
    this._router.navigate(['/buscar',nombre]);
  }

}
