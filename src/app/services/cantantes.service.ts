import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class CantantesService {

  urlBase:string='http://localhost:3000/api/';
  constructor(private _http:HttpClient) { }

  public createProducto(producto:Producto):Observable<any>{
    const httpOption = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: new HttpParams()
    }
    let body = JSON.stringify(producto)

    return this._http.post(this.urlBase+"producto/",body,httpOption)
  }

  public getProductos(){
    const httpOption = {
      headers : new HttpHeaders({

      }),
      params: new HttpParams()
    }
    return this._http.get(this.urlBase+"producto/",httpOption)
  }

//   public getArtista(id:number): Observable<any>{
//     const httpOption={
//       headers : new HttpHeaders({
//         'X-RapidAPI-Key': '69d9811f8amsh3dd8217291b0450p174cf9jsn1f030ef18fb3',
//         'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
//       })
//     } 
//     return this._http.get('https://deezerdevs-deezer.p.rapidapi.com/track/'+id,httpOption)
//   }
 }
