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

    public getTicketsFiltro(espectador:string){
      const httpOption = {
        headers : new HttpHeaders({
  
        }),
        params: new HttpParams().set('categoriaEspectador',espectador)
      }
      return this.http.get(this.urlBase+"ticket/",httpOption)
    }

    public getTicket(id:string){
      const httpOption = {
        headers : new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        params : new HttpParams()
      }
      // let body = JSON.stringify(ticket)
      return this.http.get(this.urlBase+"ticket/"+id,httpOption)
    }

    public updateTicket(ticket:Ticket){
      const httpOption = {
        headers : new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        params : new HttpParams()
      }
      let body = JSON.stringify(ticket)
      return this.http.put(this.urlBase+"ticket/"+ticket._id,body,httpOption)
    }

    public getEspectador(){
      const httpOption = {
        headers : new HttpHeaders({
  
        }),
        params: new HttpParams()
      }
      return this.http.get(this.urlBase+"espectador/",httpOption)
    }

    public deleteTicket(id:string){
      const httpOption = {
        headers : new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        params : new HttpParams()
      }
       //let body = JSON.stringify(ticket)
      return this.http.delete(this.urlBase+"ticket/"+id,httpOption)
    }
  
}
