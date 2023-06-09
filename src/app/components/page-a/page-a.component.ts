import { Component, OnInit } from '@angular/core';
import { CantantesService } from 'src/app/services/cantantes.service';
import { Track } from 'src/app/models/track';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-a',
  templateUrl: './page-a.component.html',
  styleUrls: ['./page-a.component.css']
})
export class PageAComponent implements OnInit {

  constructor(private servicio:CantantesService,
              private activatedRoute:ActivatedRoute) { }
  
  // trackIds:number []=[1109739,122607646,138547415,4762041,3128095,14628999]
  // tracks:any[]=[]
  // _id!:number
  //nombreArtista !:string
  //titulo!:string

  productos!:any[];

  ngOnInit(): void {
    // this.obtenerDatosTrack();
    this.mostrarProductos()
  }

  mostrarProductos(){
    this.servicio.getProductos().subscribe(
      (response :any )=>{
        this.productos = response;
        console.log(response)
      },
     error =>{
      console.log(error)
     } 
    )
  }

  // obtenerDatosTrack(){
  //   for (let id of this.trackIds) {
  //     this.servicio.getArtista(id).subscribe(
  //         (response: any) => {
  //           this.tracks.push(response);
  //           console.log(response)
  //     },
  //     error=>{
  //       console.log(error)
  //     }
  //   )
  // }
  // }
  
}


