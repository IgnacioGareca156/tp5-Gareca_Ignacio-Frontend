import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Espectador } from 'src/app/models/espectador';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-form-ticket',
  templateUrl: './form-ticket.component.html',
  styleUrls: ['./form-ticket.component.css']
})
export class FormTicketComponent implements OnInit {

  constructor(private servicio : TicketService, private router:Router, private activateRoute:ActivatedRoute) { 

    this.ticket = new Ticket();
    this.espectador = new Espectador;
    this.espectadores = new Array<Espectador>();
    this.mostrarEspectadores();

  }


  ticket!:Ticket;
  espectadores !: Array<Espectador>;
  espectador !: Espectador;
  accion="";
  _id!:string;

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params =>{
      if(params['id']=="0"){
        this.accion = "new";
      }else{
        this.accion = "update";
        this.cargarTicket(params['id']);
      }
    })
  }

  cargarTicket(id:string){
    this.servicio.getTicket(id).subscribe(response=>{
     console.log(response) 
     Object.assign(this.ticket, response)
    })

  }

  crearTicket(){
    this.servicio.createTicket(this.ticket).subscribe(
      (response:any)=>{
        // this.ticket.precioTicket=response.precioTicket;
        // this.ticket.fechaCompra=response.fechaCompra;
        // this.ticket.espectador=response.espectador;
        console.log(response);

      },
      error=>{
        console.log(error);
      }
    )
    this.router.navigate(['/lista-tickets']);
  }

  modificarTicket(){
    this.servicio.updateTicket(this.ticket).subscribe();
    this.router.navigate(['/lista-tickets'])
  }

  mostrarEspectadores(){
    this.servicio.getEspectador().subscribe(
      (response:any)=>{
        this.espectadores = response
        console.log(response)
      },
      error=>{
        console.log(error);
      }
    )
  }


}
