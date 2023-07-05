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
  formSubmitted = false;
  email: string;
  password: string;
  errorMensaje: string;
  error = false;

  constructor(private fb: FormBuilder) {}

  formatoLogin: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.formatoLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
      ]),
    });
  }

  submitForm() {
    const body = this.formatoLogin.value;
    this.formSubmitted = true;

    if (this.formatoLogin.valid) {
      const email = this.formatoLogin.value.email;
      const password = this.formatoLogin.value.password;

      if (this.email === 'brayan@gmail.com' && this.password === '123456789') {
        
        this.errorMensaje = 'Inicio de sesion exitoso'; // Limpiar el mensaje de error
        
      } else {
        // Los datos son inválidos, mostrar mensaje de error
        this.errorMensaje = 'Email o contraseña incorrectos';
      }

      console.log(body);
    }
  }

  visible: boolean = true;
  changetype: boolean = true;

  viewpass() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }
}
