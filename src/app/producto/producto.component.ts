import { IProduct } from './../interface/product.interface';
import { StoreService } from 'src/app/services/store.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as dataProducts from '../../assets/productos.json';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent implements OnInit {
  mainImage: string = 'assets/imgP/primera.webp';
  productoId: string;
  selectedSize: string | null = null;
  product: IProduct | undefined;

  constructor(
    private route: ActivatedRoute,
    private storeService: StoreService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.productoId = params['id'];
      const { productos }: { productos: IProduct[] } = (dataProducts as any)
        .default;
      this.product = productos.find(
        (producto) => producto.id === this.productoId
      );

      if (this.product) {
        this.mainImage = this.product.imagen;
      }
    });
  }
  changeMainImage(newImage: string) {
    this.mainImage = newImage;
  }

  addProduct(product: IProduct) {
    this.storeService.addProduct(product);
  }

  selectSize(size: string) {
    this.selectedSize = size;
  }

  addProductToCart(product: IProduct) {
    if (this.selectedSize) {
      const IProduct = { ...product, size: this.selectedSize };
      this.cartService.addToCart(IProduct);
    } else {
    }
  }
}
