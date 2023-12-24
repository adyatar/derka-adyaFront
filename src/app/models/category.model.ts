import { Product } from "./product.model";

  export interface Category {
    idCat: number;
    name_cat: string;
    img_name: string;
    products:Product[]
  }