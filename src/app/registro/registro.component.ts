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
  errorMensaje: string;
  error = false;
  termsAccepted: boolean = false;
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
      
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z\\s]+$'),
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z\\s]+$'),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(20),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(1),
      ]),
    });
  }
  submitForm() {
    this.formRegistro.value;
    this.formSubmitted = true;

        if (this.formRegistro.valid && this.termsAccepted) {
        
      if (this.formRegistro.value.password === this.formRegistro.value.confirmPassword) {
        // Las contraseñas coinciden, puedes realizar el envío del formulario
        console.log('Formulario enviado correctamente');
      } else {
        // Las contraseñas no coinciden, muestra un mensaje de error
        console.log('Passwords dont match');
      }
      if (this.formRegistro.valid && this.termsAccepted) {
    // Resto del código para el registro
  }
    } 
    }
  

  
  showPassword: boolean = true;
  visiblePassword: boolean = true;
  changetypePassword: boolean = true;
  visibleConfirm: boolean = true;
  changetypeConfirm: boolean = true;

viewpass(field: string) {
  if (field === 'password') {
    this.visiblePassword = !this.visiblePassword;
    this.changetypePassword = !this.changetypePassword;
  } else if (field === 'confirmPassword') {
    this.visibleConfirm = !this.visibleConfirm;
    this.changetypeConfirm = !this.changetypeConfirm;
  }
  
}

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
