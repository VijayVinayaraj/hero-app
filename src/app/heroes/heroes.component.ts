import { Component, OnInit } from '@angular/core';
import{Hero} from '../hero';

import {HeroService} from '../hero.service'


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes:Hero[];

  constructor(private heroService:HeroService) { }
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }


  deleteHero(hero:Hero){
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero._id).subscribe()
  }

  addHero(hero:string,id:number){
            this.heroService.addHero(hero,id)
                         .subscribe(hero=>this.heroes.push(hero))
    }
  
ngOnInit(): void {
  this.getHeroes();
  }

}
