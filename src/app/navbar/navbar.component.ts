import { Component, OnInit, EventEmitter } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

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
  tiempoCierre = 8000;
  isCartOpen: boolean = false;
  menu: boolean = false;
  search: boolean = false;

  myCart$ = this.storeService.myCart$;

  constructor(private storeService: StoreService) {}
  ngOnInit(): void {}

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
    this.SearchAbierto = false;
    this.Cart = false;
    this.Perfil = false;
    this.iconosAbierto = false;
    this.iniciarTemporizador();
  }

  toggleSearch() {
    this.SearchAbierto = !this.SearchAbierto;
    this.menuAbierto = false;
    this.Cart = false;
    this.Perfil = false;
    this.iniciarTemporizador();
  }

  toggleCart() {
    this.Cart = !this.Cart;
    this.menuAbierto = false;
    this.SearchAbierto = false;
    this.Perfil = false;
    this.iniciarTemporizador();
  }

  togglePerfil() {
    this.Perfil = !this.Perfil;
    this.menuAbierto = false;
    this.SearchAbierto = false;
    this.Cart = false;
    this.iniciarTemporizador();
  }

  iniciarTemporizador() {
    setTimeout(() => {
      this.cerrarMenu();
    }, this.tiempoCierre);
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
}
