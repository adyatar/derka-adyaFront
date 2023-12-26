import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OrderService } from '../../../../services/order.service';
import { AuthService } from '../../../../services/Security/auth.service';
import { Order } from '../../../../models/order.model';
import { DateFormatPipe } from '../../../../services/date-format.pipe';
import { ProductService } from '../../../../services/product.service';
import { OrderItem } from '../../../../models/orderitem.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [RouterModule,DateFormatPipe,CommonModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {
  randomCode = this.generateRandomCode();
constructor(private orderService:OrderService,private authService:AuthService,private prodService:ProductService){}

orders:Order[]=[]

  ngOnInit(): void {
      this.getAllOrders();
      console.log(this.randomCode);
      
  }


  getAllOrders(){
    const userId = this.authService.getUserId();
    this.orderService.getAllOrdersByUserId(userId).subscribe(orders => {
      this.orders = orders;
      this.orders.forEach(order => {
        order.orderItems.forEach(item => {
          this.fetchProductDetails(item);
        });
      });
    });
  }

  private fetchProductDetails(item: OrderItem) {
    if (item.productId) {
      this.prodService.getProductById(item.productId).subscribe(product => {
        item.product = product;
      });
    }
  }

  generateRandomCode(): string {
    const prefix = 'ADK';
    const randomDigits = Math.floor(Math.random() * 10000000); 
    const code = `${prefix}${randomDigits.toString().padStart(7, '0')}`;
    return code;
  }

}
