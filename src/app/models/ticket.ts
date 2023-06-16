import { Espectador } from "./espectador"

export class Ticket {
    _id!:string;
    precioTicket!: Number; 
    fechaCompra!: String ;
    espectador!: Espectador;
    categoriaEspectador!: String;
}
