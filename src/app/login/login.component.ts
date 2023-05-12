import { Component } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb: FormBuilder){
  }

  get email(){
    return this.formatoLogin.get('email') as FormControl
  };
  get password(){
    return this.formatoLogin.get('password') as FormControl
  };
  
  
  formatoLogin: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.formatoLogin = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.pattern("^[^ ]+@[^ ]+\.[a-z]{2,6}$")]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)])
      }
    )
  }

  procesar(): void {
    const body = this.formatoLogin.value;
    console.log(body);
  }
  }
