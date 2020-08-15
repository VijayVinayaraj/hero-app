import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';

import{HttpClient, HttpParams, HttpHeaders} from '@angular/common/http'
import config from './config/key'
@Injectable({ providedIn: 'root' })
export class HeroService {

  constructor(private http:HttpClient) { }
    
  getHeroes():Observable<Hero[]> {
  
    return this.http.get<Hero[]>(config.apiUrl)
  }

  getHero(id:string): Observable<Hero> {

  let params =new HttpParams().set("id",id)
    return this.http.get<Hero>(`${config.apiUrl}/${id}`)
  }

  updateHero(id:string,hero:Hero):Observable<Hero>{
    return this.http.put<Hero>(`${config.apiUrl}/${id}`,hero)
  }
   
  deleteHero(id:string):Observable<Hero>{
    return this.http.delete<Hero>(`${config.apiUrl}/${id}`)

  }

  addHero(hero:string,id:number):Observable<Hero>{
   let  newHero:Hero={id:id,name:hero}
   return this.http.post<Hero>(config.apiUrl,newHero)
  }
}