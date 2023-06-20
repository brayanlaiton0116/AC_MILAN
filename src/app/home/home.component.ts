import { IProduct } from './../interface/product.interface';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images: boolean= false
  product: any
  constructor( private router: Router, private storeService: StoreService) { }
  
  
  redirectToDetalleProducto(productId:string) {
    this.router.navigate(['productos', productId])   
    };

    addProduct(product: IProduct){
      this.storeService.addProduct(product)
      }
      
}


