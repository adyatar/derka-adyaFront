import { OrderItem } from "./orderitem.model";

export interface Order {
  id?: number; 
  orderItems: OrderItem[];
  userId: number;
  totalPrice: number;
  orderDate: string;
  }