import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../model/persona';
import { Observable, of } from 'rxjs'
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExceptionpruebasService {

  private urlBase:string = 'http://localhost:8080/';

  constructor(
    private http: HttpClient,
    private router:Router
  ) { }

  public getAllPersonas():Observable<Persona[]>{
    return this.http.get<Persona[]>(this.urlBase)
              .pipe(
                map( (response:Persona[]) => response),
              );
  }
}
