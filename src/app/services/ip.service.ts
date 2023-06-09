import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IpService {

  constructor(private http:HttpClient) { }

  public pasarDatos(ip:string){
  const httpOption = {
    headers: new HttpHeaders({
      'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '69d9811f8amsh3dd8217291b0450p174cf9jsn1f030ef18fb3',
		'X-RapidAPI-Host': 'community-neutrino-ip-info.p.rapidapi.com'
    })    
  }
 let body =  new HttpParams()
  .set('ip',ip)
  return this.http.post('https://community-neutrino-ip-info.p.rapidapi.com/ip-info',body,httpOption)
}

public getLibros(texto:string){
  const  httpOption ={
    headers : new HttpHeaders({
      'X-RapidAPI-Key': '69d9811f8amsh3dd8217291b0450p174cf9jsn1f030ef18fb3',
      'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'

    })
  }
  return this.http.get('https://hapi-books.p.rapidapi.com/search/'+texto, httpOption)

}

}