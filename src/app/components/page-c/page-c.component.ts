import { Component, OnInit } from '@angular/core';
import { SignosService } from 'src/app/services/signos.service';

@Component({
  selector: 'app-page-c',
  templateUrl: './page-c.component.html',
  styleUrls: ['./page-c.component.css']
})
export class PageCComponent implements OnInit {
  //signos !: Array <Signo>;
  //signo !: Signo;
  signoElegido!:string;
  textoSigno!:string;
  textoSignoMes!:string;
  textoSignoYear!:string;
  fechaS!:string;
  fechaM!:string;
  fechaY!:string;

 

  constructor(private servicio:SignosService) { 
   
  } 
  ngOnInit() {
  }
 
 
  obtenerTextoHoroscopo(signo:string){
   
    this.servicio.getSignos(signo,'week').subscribe(
      result =>{
        console.log(result)
        this.signoElegido=signo;
        this.textoSigno=result.horoscope;   
        this.fechaS=result.week     
       
        this.servicio.getSignos(signo,'month').subscribe(
          result =>{
            console.log(result)
            this.signoElegido=signo;
            this.textoSignoMes=result.horoscope; 
            this.fechaM=result.month      
            
            this.servicio.getSignos(signo,'year').subscribe(
              result =>{
                console.log(result)
                this.signoElegido=signo;
                this.textoSignoYear=result.horoscope; 
                this.fechaY=result.year           
              },
              error=>{
                console.log(error);
              }  
            )  
          },
          error=>{
            console.log(error);
          }  
        )          
      },
      
      error=>{
        console.log(error);
      }  
    );  
   }

}
