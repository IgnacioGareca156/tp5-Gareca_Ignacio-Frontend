import { Component, OnInit } from '@angular/core';
import { Transaccion } from 'src/app/models/transaccion';
import { MonedasService } from 'src/app/services/monedas.service';

@Component({
  selector: 'app-lista-transacciones',
  templateUrl: './lista-transacciones.component.html',
  styleUrls: ['./lista-transacciones.component.css']
})
export class ListaTransaccionesComponent implements OnInit {

  transaccion : Transaccion;
  transacciones !: Array<Transaccion>;

  constructor(private servicio:MonedasService) {
    this.transaccion = new Transaccion;
   }

   mostrarTransacciones(){
    this.servicio.getTransacciones().subscribe(
      (response:any)=>{
        console.log(response)
        this.transacciones = response;
      },
      error=>{
        console.log(error)
      }
    )
   }

  ngOnInit(): void {
    this.mostrarTransacciones();
  }

}
