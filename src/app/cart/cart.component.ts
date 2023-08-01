import {
  Component,
  Output,
  EventEmitter,
  HostListener,
  ElementRef,
} from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  minimoPermitido: number = 0;
  maximoPermitido: number = 10;

  @Output() closeCartEvent: EventEmitter<void> = new EventEmitter<void>();

  closeCart() {
    this.closeCartEvent.emit();
  }

  myCart$ = this.storeService.myCart$;

  constructor(
    private storeService: StoreService,
    private elementRef: ElementRef
  ) {}

  totalProduct(price: number, units: number) {
    return price * units;
  }

  delete(id: string) {
    this.storeService.deleteProduct(id);
  }

  update(operation: string, id: string) {
    const product = this.storeService.findProductById(id);

    if (product) {
      if (operation === 'minus' && product.cantidad > this.minimoPermitido) {
        product.cantidad = product.cantidad - 1;
      }
      if (operation === 'add' && product.cantidad < this.maximoPermitido) {
        product.cantidad = product.cantidad + 1;
      }
      if (product.cantidad === 0) {
        this.delete(id);
      }
    }
  }
  totalCart() {
    const result = this.storeService.totalCart();
    return result;
  }
}
