import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { PageAComponent } from './components/page-a/page-a.component';
import { PageBComponent } from './components/page-b/page-b.component';
import { PageCComponent } from './components/page-c/page-c.component';
import { PageDComponent } from './components/page-d/page-d.component';
import { PageEComponent } from './components/page-e/page-e.component';
import { FormProductoComponent } from './components/form-producto/form-producto.component';
import { ListaTransaccionesComponent } from './components/lista-transacciones/lista-transacciones.component';

const routes: Routes = [
  {path: 'menu', component: MenuComponent},
  {path: 'page-a', component: PageAComponent},
  {path: 'page-b', component: PageBComponent},
  {path: 'page-c', component: PageCComponent},
  {path: 'page-d', component: PageDComponent},
  {path: 'page-e', component: PageEComponent},
  {path: 'form-producto', component: FormProductoComponent},
  {path: 'lista-transacciones', component: ListaTransaccionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
