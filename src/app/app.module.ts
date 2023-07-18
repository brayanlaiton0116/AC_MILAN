import { NgModule } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { CaruselComponent } from './carusel/carusel.component';
import { ShopComponent } from './shop/shop.component';
import { ProductoComponent } from './producto/producto.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { PagErrorComponent } from './pag-error/pag-error.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuPerfilComponent } from './menuperfil/menu-perfil.component';
import { PerfilComponent } from './perfil/perfil.component';
import { TerminosCondicionesComponent } from './terminos/terminos-condiciones/terminos-condiciones.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'error', component: PagErrorComponent },
  { path: 'producto', component: ProductoComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'terminos', component: TerminosCondicionesComponent },
  { path: 'productos/:id', component: ProductoComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    RegistroComponent,
    CaruselComponent,
    ShopComponent,
    ProductoComponent,
    CartComponent,
    PagErrorComponent,
    MenuPerfilComponent,
    PerfilComponent,
    TerminosCondicionesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgIf,
    ReactiveFormsModule,
    NgxSliderModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    [RouterModule.forRoot(routes)],
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
