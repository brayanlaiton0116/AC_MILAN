import { Component } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  constructor(private fb: FormBuilder){}
 
  get email(){
    return this.formRegistro.get('email') as FormControl
  };
  get name(){
    return this.formRegistro.get('name') as FormControl
  };
  get lastname(){
    return this.formRegistro.get('lastname') as FormControl
  };
  get password(){
    return this.formRegistro.get('password') as FormControl
  };
  
  formRegistro: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.formRegistro = new 
  FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.pattern("^[^ ]+@[^ ]+\.[a-z]{2,6}$")]),
      name: new FormControl('',[Validators.required]),
      lastname: new FormControl('',[Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
        }
    )
  }

  proceso(): void{
    const body = this.formRegistro.value;

    console.log (body);
  }
}