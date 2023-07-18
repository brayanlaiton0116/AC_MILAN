import { Component } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  isEditing = false;
  formData = {
    name:  'Brayhan',
    lastname:  'Laiton',
    email:  'brayan@gmail.com',
    phone:  '3215536775'
  };
  

  editForm() {
    this.isEditing = true;
  }

  saveChanges() {
    this.isEditing = false;
  }
  isLoggedIn: boolean = false;

  login(email: string, password: string): boolean {
    // Aquí puedes implementar la lógica de verificación de credenciales.
    // Si las credenciales son válidas, establece isLoggedIn en true y retorna true.
    // De lo contrario, retorna false.

    if (email === 'brayan@gmail.com' && password === '123456') {
      this.isLoggedIn = true;
      return true;
    } else {
      return false;
    }
}
}
