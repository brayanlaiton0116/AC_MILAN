import { NgModule, Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { Routes, RouterModule } from '@angular/router';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { ShopComponent } from './shop/shop.component';
import { ProductoComponent } from './producto/producto.component';
import { PagErrorComponent } from './pag-error/pag-error.component';
import { TerminosCondicionesComponent } from './terminos/terminos-condiciones/terminos-condiciones.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'error', component: PagErrorComponent },
  { path: 'producto', component: ProductoComponent },
  { path: 'terminos', component: TerminosCondicionesComponent },
  { path: 'productos/:id', component: ProductoComponent },
];

@NgModule({
  imports: [NgxSliderModule, [RouterModule.forRoot(routes)]],
  exports: [RouterModule],
})
export class AppRoutingModule {}
