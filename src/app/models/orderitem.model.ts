import { Product } from "./product.model";

export interface OrderItem {
  id?: number; // Optional
  qte: number;
  price: number;
  productId: number;
  product?:Product
  }