import { FormControl } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  persona = {  
  email: '',
  password:'' ,
  };

  procesar(){
      console.log(this.persona);
  }
  
};


