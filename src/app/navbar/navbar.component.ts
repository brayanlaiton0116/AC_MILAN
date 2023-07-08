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
  otraFuncionAbierta: boolean = false;
  otraFuncionAbierta2: boolean = false;
  iconos:boolean = false
  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
    this.SearchAbierto = false;
    this.otraFuncionAbierta = false;
    this.otraFuncionAbierta2 = false;
    
  }

  toggleSearch() {
    this.SearchAbierto = !this.SearchAbierto;
    this.menuAbierto = false;
    this.otraFuncionAbierta = false;
    this.otraFuncionAbierta2 = false;
  }

  toggleOtraFuncion() {
    this.otraFuncionAbierta = !this.otraFuncionAbierta;
    this.menuAbierto = false;
    this.SearchAbierto = false;
    this.otraFuncionAbierta2 = false;
  }
  toggleOtraFuncion2() {
    this.otraFuncionAbierta2 = !this.otraFuncionAbierta2;
    this.menuAbierto = false;
    this.SearchAbierto = false;
    this.otraFuncionAbierta = false;
  }
  isCartOpen: boolean = false;
  menu: boolean = false;
  search: boolean = false;

  myCart$ = this.storeService.myCart$;

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {}

  onToggleCard() {
    this.isCartOpen = !this.isCartOpen;
  }

  closeCart() {
    this.isCartOpen = false;
  }
}
