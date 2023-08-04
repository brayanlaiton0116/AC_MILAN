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
  selectedOption: string;

  myCart$ = this.storeService.myCart$;

  AuthService = inject(AuthService);

  constructor(
    private storeService: StoreService,
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private elementRef: ElementRef
  ) {}
  ngOnInit(): void {}

  navigateToOption() {
    if (this.selectedOption === 'login') {
      this.router.navigate(['/login']);
    } else if (this.selectedOption === 'register') {
      this.router.navigate(['/register']);
    }
  }

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
    this.SearchAbierto = false;
    this.Cart = false;
    this.Perfil = false;
    this.iconosAbierto = false;
    this.isCartOpen = false;
  }

  toggleSearch() {
    this.SearchAbierto = !this.SearchAbierto;
    this.menuAbierto = false;
    this.Cart = false;
    this.Perfil = false;
    this.iconosAbierto = false;
    this.isCartOpen = false;
  }

  toggleCart() {
    this.Cart = !this.Cart;
    this.menuAbierto = false;
    this.SearchAbierto = false;
    this.Perfil = false;
    this.iconosAbierto = false;
  }

  togglePerfil() {
    this.Perfil = !this.Perfil;
    this.menuAbierto = false;
    this.SearchAbierto = false;
    this.Cart = false;
    this.iconosAbierto = false;
    this.isCartOpen = false;
  }

  cerrarMenu() {
    this.isCartOpen = !this.isCartOpen;
    this.menuAbierto = false;
    this.SearchAbierto = false;
    this.Cart = false;
    this.Perfil = false;
  }

  onToggleCard() {
    this.isCartOpen = !this.isCartOpen;
    this.menuAbierto = false;
    this.SearchAbierto = false;
    this.Cart = false;
    this.Perfil = false;
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
