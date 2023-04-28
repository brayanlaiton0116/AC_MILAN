import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  usuario = {
    UserName:'',
    Name:'',
    LastName: '',
    Password:'',
    
  }
  proceso(){
    console.log(this.usuario)
  }

}
