import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedirPlatoComponent } from './pedir-plato/pedir-plato.component';
import { InicioComponent } from './inicio/inicio.component';
import { BodegaComponent } from './bodega/bodega.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'pedir-plato', component: PedirPlatoComponent },
  { path: 'pedir-bodega', component: BodegaComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
