import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignosService {

  constructor(private _http:HttpClient) { }

  public getSignos(sign:string, alcance:string): Observable<any> {

    let httpOption = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '69d9811f8amsh3dd8217291b0450p174cf9jsn1f030ef18fb3',
		    'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
      })
    };
    return this._http.get('https://horoscope-astrology.p.rapidapi.com/horoscope?day='+alcance+'&sunsign='+sign,httpOption);
  }
}
