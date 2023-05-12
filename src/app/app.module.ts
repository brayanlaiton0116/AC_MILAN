import { NgModule, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { CaruselComponent } from './carusel/carusel.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  

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
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgIf,
    ReactiveFormsModule,
    FormsModule,
    [RouterModule.forRoot(routes)]
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  

}
