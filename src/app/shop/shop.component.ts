import { StoreService } from 'src/app/services/store.service';
import { Component, OnInit, } from '@angular/core';
import * as dataProducts from '../../assets/productos.json';
import { Router } from '@angular/router';
import type { Options,  } from "@angular-slider/ngx-slider";
import { IProduct } from '../interface/product.interface';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

export class ShopComponent implements OnInit {
  minPrice: number;
  maxPrice: number;
  selectedMinPrice: number;
  selectedMaxPrice: number;
  products:IProduct[]=[];
  filteredProducts: IProduct[]=[];
  
  constructor( private router: Router, private storeService: StoreService) { }
  
  menu:boolean = false
  allProducts: Array<any> = []
  
  getMinPrice(): number {
    return 200;
  };
  getMaxPrice(): number {
    return 1400;
  };


  cerrarFuncion() {
    this.menu = false ;
  }

  ngOnInit(): void {
    const {productos} : any = (dataProducts as any).default
    this.allProducts = productos;
    console.log(this.allProducts);

    this.minPrice = this.getMinPrice();
    this.maxPrice = this.getMaxPrice();

    this.selectedMinPrice = this.minPrice;
    this.selectedMaxPrice = this.maxPrice;

    this.filterProducts();
  }

  redirectToDetalleProducto(productId:string) {
  
    this.router.navigate(['productos', productId])                    
    };
    
  sliderOptions: Options = {
  floor: 100,
  ceil: 1500
};
filterProducts() {

  this.filteredProducts = this.products.filter((product: any) => {
    return product.precio >= this.selectedMinPrice && product.
precio <= this.selectedMaxPrice;
  });
}

addProduct(product: IProduct){
this.storeService.addProduct(product)
}
  

}

