import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Alumno } from '../models/alumno';
import { CommonService } from './common.service';
import { BASE_ENDPOINT } from '../config/app';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService extends CommonService<Alumno>{

  protected baseEndpoint = BASE_ENDPOINT + '/alumnos';

  constructor(http: HttpClient) {
    super(http);
  }

  public crearConFoto(alumno: Alumno, archivo: File): Observable<Alumno> {
    const formData = new FormData();
    formData.append('archivo', archivo);
    formData.append('nombre', alumno.nombre);
    formData.append('apellido', alumno.apellido);
    formData.append('email', alumno.email);
    return this.http.post<Alumno>(this.baseEndpoint + '/crear-con-foto', formData);
  }

  public editarConFoto(alumno: Alumno, archivo: File): Observable<Alumno> {
    const formData = new FormData();
    formData.append('archivo', archivo);
    formData.append('nombre', alumno.nombre);
    formData.append('apellido', alumno.apellido);
    formData.append('email', alumno.email);
    return this.http.put<Alumno>(`${this.baseEndpoint}/editar-con-foto/${alumno.id}`, formData);
  }

  public filtrarPorNombre(nombre: string): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(`${this.baseEndpoint}/filtrar/${nombre}`);
  }



}
