import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Productos} from './../models/productos.model';
import {catchError, map} from 'rxjs/operators';

@Injectable()
export class ProductosService {

  constructor(private http: HttpClient) {
  }


  index(): Observable<any> {
    return this.http.get<Productos[]>(`https://www.desarrollohidrocalido.com/ejemplos/AngularJs-Slim-PHP/model/modulos/modulo1/cat_precios`)
      .pipe(
        map((response: any) => {
          return response.cat_precios;
        }),
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  show(conactId: number): Observable<Productos> {
    return this.http
      .get<Productos>(`https://www.desarrollohidrocalido.com/ejemplos/AngularJs-Slim-PHP/model/modulos/modulo1/cat_precios`);

  }

  create(contact: Productos): Observable<Productos> {
    return this.http
      .post<Productos>(`https://www.desarrollohidrocalido.com/ejemplos/AngularJs-Slim-PHP/model/modulos/modulo1/cat_precios`, contact);
  }

  update(contact: Productos): Observable<Productos> {

    return this.http
      .put<Productos>(`http://www.desarrollohidrocalido.com/ejemplos/AngularJs-Slim-PHP/model/modulos/modulo1/cat_precios/${contact.cat_prec_id}`, contact);
  }


  destroy(id: number): Observable<Productos> {
    return this.http
      .delete<Productos>(`http://www.desarrollohidrocalido.com/ejemplos/AngularJs-Slim-PHP/model/modulos/modulo1/cat_precios/${id}`);
  }
}
