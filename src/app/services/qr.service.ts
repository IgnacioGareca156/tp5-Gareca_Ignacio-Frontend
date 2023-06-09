import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QrService {

  private apiKey= 'ecd99f0c';
  private url= 'http://omdbapi.com/';

  constructor(private _http:HttpClient) { }

  buscarPelicula(titulo: string) {
    const url = `http://www.omdbapi.com/?t=${titulo}&apikey=${this.apiKey}`;
    return this._http.get(url);
  }

  /*public getGenerador( url:string):Observable<any>{
    const httpOptions={
      headers:new HttpHeaders ({
        'X-RapidAPI-Key': '69d9811f8amsh3dd8217291b0450p174cf9jsn1f030ef18fb3',
		  'X-RapidAPI-Host': 'getqrcode.p.rapidapi.com'
      })
    };
   // const body = `type=${encodeURIComponent(type)}&content=${encodeURIComponent(url)}`;
   // const body= new HttpParams()
    //body.set('type',type)
    //body.set('forQR',url);
    
    return this._http.get('https://getqrcode.p.rapidapi.com/api/getQR?forQR='+url, httpOptions);
  }*/

}
