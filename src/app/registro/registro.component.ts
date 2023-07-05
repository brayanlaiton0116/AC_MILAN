import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  myForm: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder) {}

  get email() {
    return this.formRegistro.get('email') as FormControl;
  }
  get name() {
    return this.formRegistro.get('name') as FormControl;
  }
  get lastname() {
    return this.formRegistro.get('lastname') as FormControl;
  }
  get password() {
    return this.formRegistro.get('password') as FormControl;
  }
  get confirmPassword() {
    return this.formRegistro.get('confirmPassword') as FormControl;
  }

  formRegistro: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.formRegistro = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z\\s]+$'),
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z\\s]+$'),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
      ]),
    });
  }
  submitForm() {
    const body = this.formRegistro.value;
    this.formSubmitted = true;
    if (this.formRegistro.valid) {
      const name = this.formRegistro.value.name;
      const lastname = this.formRegistro.value.lastname;
      const email = this.formRegistro.value.email;
      const password = this.formRegistro.value.password;
      const confirmPassword = this.formRegistro.value.confirmPassword;
      console.log(body);
      // Lógica de autenticación
      if (this.authenticate(name, lastname, email, password, confirmPassword)) {
        // Autenticación exitosa
        alert('Inicio de sesión exitoso');
      } else {
        // Credenciales incorrectas
        alert('Correo electrónico o contraseña incorrectos');
      }
    }
  }

  authenticate(
    name: string,
    lastname: string,
    email: string,
    password: string,
    confirmPassword: string
  ): boolean {
    return (
      name === 'brayan' &&
      lastname === 'laiton' &&
      email === 'brayan@gmail.com' &&
      password === '123456789' &&
      confirmPassword === '123456789'
    );
  }

  visible: boolean = true;
  changetype: boolean = true;
  showPassword: boolean = false;

  viewpass() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
