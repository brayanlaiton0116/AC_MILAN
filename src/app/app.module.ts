import { NgModule,OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegistroComponent } from './registro/registro.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login',component: LoginComponent},
  {path: 'registro',component: RegistroComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    RegistroComponent,

  ],
  
  imports: [
    BrowserModule,
    FormsModule,
   [RouterModule.forRoot(routes)],
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
