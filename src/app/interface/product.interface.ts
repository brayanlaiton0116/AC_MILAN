export interface IProduct {
  id: string;
  marca: string;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string;
  tallas: Talla[];
  imagen: string;
  imagenes: string[];
  cantidad: number;
}

export interface Talla {
  talla: string;
  stock: number;
}
