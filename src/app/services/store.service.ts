import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, lastValueFrom } from 'rxjs';
import { IProduct } from '../interface/product.interface';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private myList: IProduct[] = [];

  private myCart = new BehaviorSubject<IProduct[]>([]);
  myCart$ = this.myCart.asObservable();

  addProduct(product: IProduct) {
    if (this.myList.length === 0) {
      product.cantidad = 1;
      this.myList.push(product);
      this.myCart.next(this.myList);
    } else {
      const productMod = this.myList.find((element) => {
        return element.id === product.id;
      });
      if (productMod) {
        productMod.cantidad = productMod.cantidad + 1;
        this.myCart.next(this.myList);
      } else {
        product.cantidad = 1;
        this.myList.push(product);

        this.myCart.next(this.myList);
      }
    }
  }

  findProductById(id: string) {
    return this.myList.find((element) => {
      return element.id === id;
    });
  }

  deleteProduct(id: string) {
    this.myList = this.myList.filter((product) => {
      return product.id != id;
    });
    this.myCart.next(this.myList);
  }
  totalCart() {
    const total = this.myList.reduce(function (acc, product) {
      return acc + product.cantidad * product.precio;
    }, 0);
    return total;
  }
}
