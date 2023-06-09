import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CantantesService } from 'src/app/services/cantantes.service';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent implements OnInit {
  producto : Producto;
  constructor(private servicio:CantantesService) { 
    this.producto  = new Producto;
  }

  ngOnInit(): void {
  }
  crearProducto(){
    // this.nombre,this.descripcion,this.imagen,this.precio,this.stock,this.destacado
    this.servicio.createProducto(this.producto).subscribe(
      (response:any)=>{
        // this.producto.nombre = response.nombre;
        // this.producto.descripcion = response.descripcion;
        // this.producto.imagen = response.imagen;
        // this.producto.precio = response.precio;
        // this.producto.stock = response.stock;
        // this.producto.destacado = response.destacado;
         console.log(response);
         console.log(this.producto)
      },
      error=>{
        console.log(error)
      }
    )
  }
  
}
