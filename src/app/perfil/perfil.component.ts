import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  isEditing = false;
  formData = {
    name:  'Brayhan',
    lastname:  'Laiton',
    email:  'brayan@gmail.com',
    phone:  '3215536775'
  };
  

  editForm() {
    this.isEditing = true;
  }

  saveChanges() {
    this.isEditing = false;
  }
}

