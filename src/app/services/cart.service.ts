import { Injectable } from '@angular/core';
import { IProduct } from '../interface/product.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: IProduct[] = [];

  constructor() {}

  addToCart(product: IProduct) {
    this.cartItems.push(product);
  }

  getCartItems(): IProduct[] {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
  }
}
