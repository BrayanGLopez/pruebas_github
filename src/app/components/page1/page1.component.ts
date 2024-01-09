import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Persona } from 'src/app/model/persona';
import { ExceptionpruebasService } from 'src/app/service/exceptionpruebas.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit{

  personas!:Persona[];
  error!:string;

  constructor(
    private exceptionPruebas:ExceptionpruebasService
  ){}

  ngOnInit(): void {

    this.exceptionPruebas.getAllPersonas()
    .pipe( tap( (response) => this.personas = response) )
    .subscribe({
      error: e => {
        this.error = e.error.error;
      },
    });
    
  }

}
