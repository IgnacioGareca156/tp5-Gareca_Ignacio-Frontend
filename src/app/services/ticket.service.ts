import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  urlBase:string='http://localhost:3000/api/';

  constructor(private http : HttpClient) { }

    public createTicket(ticket:Ticket):Observable<any>{
      const httpOption = {
        headers : new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        params: new HttpParams()
      }
      let body = JSON.stringify(ticket)
  
      return this.http.post(this.urlBase+"ticket/",body,httpOption)
    }
}
