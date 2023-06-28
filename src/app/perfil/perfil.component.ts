import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{
  
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      edad: ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      // Agrega más campos aquí
    });
  }

  submitForm() {
    if (this.myForm.invalid) {
      // El formulario no es válido
      return;
    }

    // Aquí puedes realizar el envío del formulario o cualquier otra acción necesaria
  }
  

  
  
  
  
  


  
}
