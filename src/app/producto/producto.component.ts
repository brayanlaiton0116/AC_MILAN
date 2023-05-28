import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as dataProducts from '../../assets/productos.json';

export interface IProducto {
  id:          string;
  marca:       string;
  nombre:      string;
  descripcion: string;
  precio:      string;
  categoria:   string;
  tallas:      Talla[];
  imagen:      string;
  imagenes:    string[];
}

export interface Talla {
  talla: string;
  stock: number;
}

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit{
  
  mainImage: string = 'assets/imgP/primera.webp';

  productoId: string;

  product: IProducto | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productoId = params['id'];
      const {productos} : {productos: IProducto[]} = (dataProducts as any).default
      this.product = productos.find(producto => producto.id === this.productoId);
      
      if(this.product){
        this.mainImage = this.product.imagen
      }
    });
  }
  changeMainImage(newImage:string){
    this.mainImage = newImage
  }
}
