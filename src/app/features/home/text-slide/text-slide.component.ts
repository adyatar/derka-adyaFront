import { Component } from '@angular/core';

@Component({
  selector: 'app-text-slide',
  templateUrl: './text-slide.component.html',
  styleUrl: './text-slide.component.css'
})
export class TextSlideComponent {

  slides = [
    {text:' Expedited Shipping only $5.95 on orders $100+!' },
    {text:' Expedited Shipping only $5.95 on orders $100+!' },
    {text:' Expedited Shipping only $5.95 on orders $100+!' },
    {text:' Expedited Shipping only $5.95 on orders $100+!' },
    {text:' Expedited Shipping only $5.95 on orders $100+!' },
    {text:' Expedited Shipping only $5.95 on orders $100+!' },
    {text:' Expedited Shipping only $5.95 on orders $100+!' },
    {text:' Expedited Shipping only $5.95 on orders $100+!' },
    {text:' Expedited Shipping only $5.95 on orders $100+!' },
    {text:' Expedited Shipping only $5.95 on orders $100+!' },
    
  ];

  slideConfig = {dots:false,loop:true,draggable:true,arrows:false,mobileFirst: true,autoplay: true,
    autoplaySpeed: 0,
    speed: 20000,
    cssEase: 'linear', slidesToShow: 1,
    slidesToScroll: 1,
   
  };
}
