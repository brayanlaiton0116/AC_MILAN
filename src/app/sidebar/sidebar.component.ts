import { Component, inject } from '@angular/core';
import { AuthService } from './../services/auth.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  AuthService = inject(AuthService);
}
