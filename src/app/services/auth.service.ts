import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInVar = false; // Variable que indica si el usuario está autenticado

  constructor() {}

  // Función que devuelve true si el usuario está autenticado, false de lo contrario
  isLoggedIn(): boolean {
    return this.isLoggedInVar;
  }

  // Función para iniciar sesión
  login(email: string, password: string): boolean {
    // Aquí se realizaría la lógica de autenticación, por ejemplo, consultar una API
    if (email === 'brayan@gmail.com' && password === '123456789') {
      this.isLoggedInVar = true;
      return true;
    } else {
      this.isLoggedInVar = false;
      return false;
    }
  }

  // Función para cerrar sesión
  logout() {
    this.isLoggedInVar = false;
  }

  isLogged():boolean{
    return localStorage.getItem('rememberedData') ? true : false;
  }
}
