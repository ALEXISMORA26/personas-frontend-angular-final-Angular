import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse } from '@angular/common/http';
import { Persona } from './persona.model';

@Injectable()
export class DataService {

  constructor(private httpClient: HttpClient) {}

  urlBase = 'http://localhost:8080/api/v1';

  cargarPersonas(){
    //return this.httpClient.get(this.urlBase+ "/empleados");
    return this.httpClient.get(this.urlBase+ "/persona");
  }

  agregarPersona(persona: Persona){
    return this.httpClient.post(this.urlBase, persona);
  }

  modificarPersona(idPersona: number, persona: Persona){
    let url: string;
    url = this.urlBase + '/editar/' + idPersona;
    //url = this.urlBase + '/empleados';
    this.httpClient.put(url, persona)
      .subscribe(
        (response) => {
          console.log('resultado modificar persona: ' + response);
        },
        (error) => console.log('Error en modificar persona:' + error)
      );
  }

  eliminarPersona(idPersona: number){
    let url: string;
    url = this.urlBase + '/' + idPersona;
    this.httpClient.delete(url)
    .subscribe(
      (response) => {
        console.log('resultado eliminar persona: ' + response);
      },
      (error) => console.log('Error en eliminar persona:' + error)
    );
  }



}
