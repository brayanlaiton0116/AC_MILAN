import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  formData = {
    name:  'Brayhan',
    lastname:  'Laiton',
    email:  'brayan@gmail.com',
    phone:  '3215536775'
  };
  isEditing = false;

  editForm() {
    this.isEditing = true;
  }

  saveChanges() {
    this.isEditing = false;
  }
}

