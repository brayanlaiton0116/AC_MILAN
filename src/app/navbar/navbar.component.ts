import { AuthService } from './../services/auth.service';
import { Component, OnInit, inject } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  menuAbierto: boolean = false;
  SearchAbierto: boolean = false;
  Cart: boolean = false;
  Perfil: boolean = false;
  iconosAbierto: boolean = false;

  isCartOpen: boolean = false;
  menu: boolean = false;
  search: boolean = false;

  myCart$ = this.storeService.myCart$;

  AuthService = inject(AuthService);

  constructor(
    private storeService: StoreService,
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}
  ngOnInit(): void {}

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
    this.SearchAbierto = false;
    this.Cart = false;
    this.Perfil = false;
    this.iconosAbierto = false;
  }

  toggleSearch() {
    this.SearchAbierto = !this.SearchAbierto;
    this.menuAbierto = false;
    this.Cart = false;
    this.Perfil = false;
  }

  toggleCart() {
    this.Cart = !this.Cart;
    this.menuAbierto = false;
    this.SearchAbierto = false;
    this.Perfil = false;
  }

  togglePerfil() {
    this.Perfil = !this.Perfil;
    this.menuAbierto = false;
    this.SearchAbierto = false;
    this.Cart = false;
  }

  cerrarMenu() {
    this.menuAbierto = false;
    this.Cart = false;
    this.Perfil = false;
  }

  onToggleCard() {
    this.isCartOpen = !this.isCartOpen;
  }

  closeCart() {
    this.isCartOpen = false;
  }
  searchTerm: string = '';
  searchResults: any[] = [];

  logout() {
    localStorage.removeItem('rememberedData');
    this.router.navigate(['/login']);
  }
}
