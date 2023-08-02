import { Component, inject } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  AuthService = inject(AuthService);
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('rememberedData');
    this.router.navigate(['/login']);
  }
}
