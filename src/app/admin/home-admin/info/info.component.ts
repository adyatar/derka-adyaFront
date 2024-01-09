import { Component , OnInit} from '@angular/core';
import { OrderService } from '../../../services/order.service';
import { UserService } from '../../../services/user.service';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent implements OnInit{
  totalOrders!:number;
  ordersMoney!:number;
  nbrUsers!:number;
  nbrProducts!:number;

  constructor(private orderService:OrderService,private userService:UserService,private productService:ProductService){}

  ngOnInit(): void {

    this.productService.productChanged$.subscribe(() => {
      this.productService.nbrProducts().subscribe((nbr) => this.nbrProducts = nbr);
    });
    
    this.orderService.getTotalOrders().subscribe((nmb)=>{this.totalOrders=nmb});
    this.orderService.getOrdersMoney().subscribe((mny)=>{this.ordersMoney=mny});
    this.userService.getNbrUsers().subscribe((nbr)=>this.nbrUsers=nbr);
    this.productService.nbrProducts().subscribe((nbr)=>this.nbrProducts=nbr);
  }
  

}
