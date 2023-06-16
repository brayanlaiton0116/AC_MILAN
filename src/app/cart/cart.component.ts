import { Component, Output, EventEmitter } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart:boolean = true ;
  
  @Output() closeCart: EventEmitter<void> = new EventEmitter<void>();
  
  cerrarFuncion() {
    this.cart = false;
    return
  }

  onCloseCart() {
    this.closeCart.emit();
  }

  myCart$ = this.storeService.myCart$
  
  constructor(private storeService: StoreService) {}    
  
  
  totalProduct(price: number, units: number){
    return price * units
    
  }

  delete(id:string){
    this.storeService.deleteProduct(id)
  }

  update(operation:string, id:string){
    const product = this.storeService.findProductById(id)

    if(product){
      if(operation === 'minus' && product.cantidad > 0){
        product.cantidad = product.cantidad - 1;
      }
      if(operation === 'add'){
        product.cantidad = product.cantidad + 1;
      }
      if(product.cantidad === 0){
        this.delete(id)
      }
    }
  }
  totalCart(){
    const result = this.storeService.totalCart()
    return result
  }
  
}