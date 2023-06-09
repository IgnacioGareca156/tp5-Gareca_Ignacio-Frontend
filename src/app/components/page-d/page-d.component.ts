import { Component, OnInit } from '@angular/core';
import { QrService } from 'src/app/services/qr.service';

@Component({
  selector: 'app-page-d',
  templateUrl: './page-d.component.html',
  styleUrls: ['./page-d.component.css']
})
export class PageDComponent implements OnInit {

  constructor(private servicio:QrService) { }

  //type!:string;
  titulo!:string;
  movie!:any;
  //mensaje!:any;

  buscarMovie() {
    //const type = 'url';
    //const url = 'https://www.ejemplo.com';

    this.servicio.buscarPelicula(this.titulo).subscribe(
      (response:any) => {
        this.movie=response;
        //console.log(this.movies)
        // Aquí puedes manejar la respuesta de la API
        console.log(response);
      },
      (error) => {
        // Manejo de errores
        console.error(error);
      }
    );
  }

  ngOnInit(): void {
   
  }

}
