import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formSubmitted = false;
  email: string;
  password: string;
  errorMensaje: string;
  error = false;
  rememberMe: boolean = false;

  formatoLogin: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private location: Location,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.formatoLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(1)]],
      rememberMe: new FormControl(false),
    });

    const rememberedData = JSON.parse(
      localStorage.getItem('rememberedData') || '{}'
    );
    if (rememberedData && rememberedData.rememberMe !== null) {
      this.formatoLogin.patchValue({
        rememberMe: true,
      });
    }
  }

  submitForm() {
    const body = this.formatoLogin.value;
    this.formSubmitted = true;

    if (this.formatoLogin.valid) {
      const email = this.formatoLogin.value.email;
      const password = this.formatoLogin.value.password;

      if (this.formatoLogin.value.rememberMe) {
        localStorage.setItem(
          'rememberedData',
          JSON.stringify({ rememberMe: true })
        );
      } else {
        localStorage.removeItem('rememberedData');
        this.router.navigate(['/login']);
      }

      if (email === 'brayan@gmail.com' && password === '123456789') {
        this.router.navigate(['/perfil']);
        this.errorMensaje = 'Successful login';
        alert('Successful login');
      } else {
        this.errorMensaje = 'Incorrect email or password';
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
