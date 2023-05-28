import { Component, OnInit, } from '@angular/core';
import * as dataProducts from '../../assets/productos.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

export class ShopComponent implements OnInit {
  constructor(private router: Router) { }
  menu:boolean = false
  allProducts: Array<any> = []

  ngOnInit(): void {
    const {productos} : any = (dataProducts as any).default
    this.allProducts = productos;
    console.log(this.allProducts);
  }

  redirectToDetalleProducto(productId:string) {
  
    this.router.navigate(['productos', productId]);
  }
}


  

