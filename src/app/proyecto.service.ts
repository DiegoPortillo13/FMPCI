import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Proyecto } from './proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor(private http: HttpClient) { }
  url = environment.baseUrl

  getTodos(){
    return this.http.get(`${this.url}/get.php`);
  }

  addP(proyecto: Proyecto){
    return this.http.post(`${this.url}/post.php`, proyecto);
  }

  deleteP(proyecto: Proyecto){
    return this.http.delete(`${this.url}/delete.php?numProyecto = ${proyecto.numProyecto}`);
  }

  updateP(proyecto: Proyecto){
    return this.http.put(`${this.url}/update.php`, proyecto);
  }

  getProyectos(id: string | number) {
    return this.http.get(`${this.url}/get1.php?numProyecto=${id}`);
  }
  
}
