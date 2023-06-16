import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { PageAComponent } from './components/page-a/page-a.component';
import { PageBComponent } from './components/page-b/page-b.component';
import { PageCComponent } from './components/page-c/page-c.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PageDComponent } from './components/page-d/page-d.component';
import { PageEComponent } from './components/page-e/page-e.component';
import { FormProductoComponent } from './components/form-producto/form-producto.component';
import { ListaTransaccionesComponent } from './components/lista-transacciones/lista-transacciones.component';
import { FormTicketComponent } from './components/form-ticket/form-ticket.component';
import { ListaTicketsComponent } from './components/lista-tickets/lista-tickets.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PageAComponent,
    PageBComponent,
    PageCComponent,
    PageDComponent,
    PageEComponent,
    FormProductoComponent,
    ListaTransaccionesComponent,
    FormTicketComponent,
    ListaTicketsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
