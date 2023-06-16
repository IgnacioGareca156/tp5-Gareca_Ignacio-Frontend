import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Espectador } from 'src/app/models/espectador';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-lista-tickets',
  templateUrl: './lista-tickets.component.html',
  styleUrls: ['./lista-tickets.component.css']
})
export class ListaTicketsComponent implements OnInit {

  constructor(private servicio:TicketService, private router : Router, private activateRoute : ActivatedRoute) { 

    this.ticket = new Ticket; 
    //this.espectador = new Espectador;
  }
  // espectador : Espectador
  ticket : Ticket;
  tickets !: Array<Ticket>;
 espectador!: string;
 accion ="";
 _id!:string;
 
 

  ngOnInit(): void {
   
    this.activateRoute.params.subscribe(params =>{
      if(params['id']=="0"){
        this.accion = "new";
      }else{
        this.accion = "update";
        this.modificarTicket(params['id']);
      }
    })

    this.buscar()
  }

  // mostrarTickets(){
  //   this.servicio.getTickets().subscribe(
  //     (response:any)=>{
  //       this.tickets = response;
  //       // this.espectador=response.espectador;
  //       console.log(response);
  //     },
  //     error=>{
  //       console.log(error);
  //     }
  //   )
  // }

  public buscar(){
    this.servicio.getTicketsFiltro(this.espectador).subscribe(
      (response:any)=>{
        //console.log(this.filtroTicket);
        this.tickets = [];
        let ticket : Ticket = new Ticket();
        response.forEach((element:any) => {
          Object.assign(ticket,element);
          this.tickets.push(ticket);
          ticket = new Ticket;
        });
        console.log(this.tickets)
      }
    )
  }

  agregarTicket(){
    this.router.navigate(['/form-ticket',0])
  }

  modificarTicket(_id:string){
    this.router.navigate(['/form-ticket',_id])
  }

  eliminarTicket(_id:string){
    this.servicio.deleteTicket(_id).subscribe(response=>{console.log(response)})
    console.log(_id)
  }




}
