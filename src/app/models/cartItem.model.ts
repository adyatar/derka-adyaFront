import { Product } from "./product.model";

export interface CartItem {
    cartItemId?: number; 
    qte: number;
    price: number;
    product?: Product; 
    productId?: number; 
  }