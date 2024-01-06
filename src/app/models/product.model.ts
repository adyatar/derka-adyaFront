  export interface Product {
    id: number;
    name_prod: string;
    desc_prod?: string;
    price: number;
    qte_prod?:number;
    image_prod:string;
    quantity?: number;
    idCat?:number
  }