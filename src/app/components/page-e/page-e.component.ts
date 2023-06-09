import { Component, OnInit } from '@angular/core';
import { IpService } from 'src/app/services/ip.service';

@Component({
  selector: 'app-page-e',
  templateUrl: './page-e.component.html',
  styleUrls: ['./page-e.component.css']
})
export class PageEComponent implements OnInit {


  constructor(private servicio:IpService) { }

  ip!:string;
  infoIp!:any;
  texto!:string;
  libros!:any[];
  autores!:any[];

  // buscarIp(){
  //   this.servicio.pasarDatos(this.ip).subscribe(
  //     (response:any)=>{
  //       this.infoIp=response;
  //       console.log(response)
        
  //     },
  //     error=>{
  //       console.log(error)
  //     }
  //   )
  // }

  buscarLibros(){
    this.servicio.getLibros(this.texto).subscribe(
      (response:any)=>{
        this.libros=response;
        this.autores=response.authors;
        console.log(response);
        console.log(this.autores)
      },
      error =>{
        console.log(error)
      }
    )
  }

  ngOnInit(): void {
  }

}
