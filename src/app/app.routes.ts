import { RouterModule, Routes } from "@angular/router";
import {HomeComponent} from "./componentes/home/home.component";
import {AboutComponent} from "./componentes/about/about.component";
import {HeroesComponent} from "./componentes/heroes/heroes.component";
import {HeroeComponent} from "./componentes/heroe/heroe.component";
import {HerobuscadoComponent} from "./componentes/herobuscado/herobuscado.component";

const  APP_ROUTES: Routes =[
  {path:'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'heroes', component: HeroesComponent},
  {path : 'heroe/:id', component: HeroeComponent},
  {path: 'buscar/:nom', component: HerobuscadoComponent},
  {path: '**',pathMatch: 'full',redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);




