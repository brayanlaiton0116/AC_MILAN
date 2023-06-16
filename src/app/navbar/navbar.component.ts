import { Component, OnInit, Output } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  cart:boolean =false;
  menu:boolean = false;
  search:boolean = false;
  
  myCart$ = this.storeService.myCart$
  
  constructor(private storeService: StoreService) {}
  
  ngOnInit(): void {
  
  }
  onToggleCard(){
    this.cart = !this.cart
  }

}




