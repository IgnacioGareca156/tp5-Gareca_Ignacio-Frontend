import { Component, OnInit } from '@angular/core';
import { Transaccion } from 'src/app/models/transaccion';
import { MonedasService } from 'src/app/services/monedas.service';


@Component({
  selector: 'app-page-b',
  templateUrl: './page-b.component.html',
  styleUrls: ['./page-b.component.css']
})
export class PageBComponent implements OnInit {
  total!:string;
  fromValue!:string;
  fromType!:string;
  toType!:string;
  transaccion : Transaccion;

  constructor(private servicio:MonedasService) {
    this.transaccion = new Transaccion
   }



  convertir() {
     this.servicio.convertCurrency(this.fromValue, this.fromType, this.toType)
      .subscribe((response :any)=> {
        console.log(response);
        this.total=response.result;
        this.transaccion.monedaOrigen = this.fromType;
        this.transaccion.cantidadOrigen = Number(this.fromValue);
        this.transaccion.monedaDestino = this.toType;
        this.transaccion.cantidadDestino = Number(this.total);
        this.transaccion.tasaConversion = Number(this.total) / Number(this.fromValue);
        
        this.servicio.createTransaccion(this.transaccion).subscribe(
          (response:any)=>{
            console.log(response)
            console.log(this.total)
          }
        )
      }, error => {
        console.log(error);
      });
  }

  public realizarTransaccion(){
    this.servicio.createTransaccion(this.transaccion).subscribe(
      (response:any)=>{
        console.log(response)
  },
  error=>{
    console.log(error);
  });
}
  
    
  ngOnInit(): void {
  }

}
