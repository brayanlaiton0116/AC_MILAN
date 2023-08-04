import { Component, ViewChild } from '@angular/core';
import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent {
  @ViewChild('drawer') drawer: MatSidenav;
  isHandset$: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map((result) => result.matches),
      shareReplay()
    );
  }

  isEditing = false;
  formData = {
    name: 'Brayhan',
    lastname: 'Laiton',
    email: 'brayan@gmail.com',
    phone: '3215536775',
  };

  editForm() {
    this.isEditing = true;
  }

  saveChanges() {
    this.isEditing = false;
  }
  isLoggedIn: boolean = false;

  login(email: string, password: string): boolean {
    if (email === 'brayan@gmail.com' && password === '123456') {
      this.isLoggedIn = true;
      return true;
    } else {
      return false;
    }
  }
}
