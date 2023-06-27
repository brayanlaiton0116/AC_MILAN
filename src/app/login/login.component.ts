import { Component } from '@angular/core';
import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private fb: FormBuilder) {}

  get email() {
    return this.formatoLogin.get('email') as FormControl;
  }
  get password() {
    return this.formatoLogin.get('password') as FormControl;
  }

  formatoLogin: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.formatoLogin = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[^ ]+@[^ ]+.[a-z]{2,6}$'),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
      ]),
    });
  }

  submitForm() {
    const body = this.formatoLogin.value;

    if (this.formatoLogin.valid) {
      const email = this.formatoLogin.value.email;
      const password = this.formatoLogin.value.password;

      // Lógica de autenticación
      if (this.authenticate(email, password)) {
        // Autenticación exitosa
        alert('Inicio de sesión exitoso');
      } else {
        // Credenciales incorrectas
        alert('Correo electrónico o contraseña incorrectos');
      }
    }
    console.log(body);
  }

  authenticate(email: string, password: string): boolean {
    return email === 'brayan@gmail.com' && password === '123456789';
  }
  submit() {
    if (this.formatoLogin.valid) {
      // Aquí puedes realizar las acciones necesarias con los datos del formulario
      console.log('Datos enviados:', this.formatoLogin.value);
    } else {
      // Si el formulario no es válido, puedes mostrar un mensaje de error o tomar alguna otra acción
      console.log('El formulario no es válido');
    }
  }
}
