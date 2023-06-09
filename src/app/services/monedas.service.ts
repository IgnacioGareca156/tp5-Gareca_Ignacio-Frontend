import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaccion } from '../models/transaccion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonedasService {

  urlBase:string='http://localhost:3000/api/';
  constructor(private _http:HttpClient) { }

  public createTransaccion(transaccion:Transaccion):Observable<any>{
    const httpOption = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: new HttpParams()
    }
    let body = JSON.stringify(transaccion)

    return this._http.post(this.urlBase+"transaccion/",body,httpOption)
  }

  public getTransacciones(){
    const httpOption = {
      headers : new HttpHeaders({

      }),
      params: new HttpParams()
    }
    return this._http.get(this.urlBase+"transaccion/",httpOption)
  }

  convertCurrency(fromValue: string, fromType: string, toType: string) {
      const httpOpion={
        headers : new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '69d9811f8amsh3dd8217291b0450p174cf9jsn1f030ef18fb3',
        'X-RapidAPI-Host': 'community-neutrino-currency-conversion.p.rapidapi.com'
      })
    }
    let body = new HttpParams()
    .set('from-value', fromValue)
    .set('from-type', fromType)
    .set('to-type', toType);

    return this._http.post('https://community-neutrino-currency-conversion.p.rapidapi.com/convert', body ,httpOpion );
  }
}


