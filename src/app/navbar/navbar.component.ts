import { AuthService } from './../services/auth.service';
import { OnInit, inject } from '@angular/core';
import { Component, ElementRef, HostListener } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router, NavigationEnd } from '@angular/router';
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
    private router: Router,
    private elementRef: ElementRef
  ) {}
  ngOnInit(): void {}

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }

  toggleSearch() {
    this.SearchAbierto = !this.SearchAbierto;
  }

  toggleCart() {
    this.Cart = !this.Cart;
  }

  togglePerfil() {
    this.Perfil = !this.Perfil;
  }

  cerrarMenu() {
    this.menuAbierto = false;
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
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.menuAbierto = false;
        this.SearchAbierto = false;
        this.Cart = false;
        this.Perfil = false;
        this.iconosAbierto = false;
        this.isCartOpen = false;
      }
    });

    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.menuAbierto = false;
      this.SearchAbierto = false;
      this.Cart = false;
      this.Perfil = false;
      this.iconosAbierto = false;
      this.isCartOpen = false;
    }
  }
}
