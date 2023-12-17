import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnInit {
   
  constructor() { }
  ngOnInit(): void { }



  category = [ "Apple", "Beats", "Huawei", "PlayStation" ];


  slides = [
    { img: '../assets/images/apple.png',brand:'Apple',name:'IPhone 15 Pro Max',price:'$ 1,099.00',discount:'' },
    { img: '../assets/images/applewatch.png',brand:'Apple',name:'Apple Watch Serie 9',price:'$ 300.00',discount:'' },
    { img: '../assets/images/beats.jpg',brand:'Beats',name:'Studio3 Wireless',price:'$ 190.00',discount:'' },
    { img: '../assets/images/huawei.png',brand:'Huawei',name:'Watch GT4 46mm',price:'$ 270.00',discount:'' },
    { img: '../assets/images/ps4.png',brand:'PlayStation',name:'Ps4 Slim 500Go',price:'$ 390.00',discount:'' },
    { img: '../assets/images/ps5console.png',brand:'PlayStation',name:'Ps5 1Tb',price:'$ 800.00',discount:'' },
    { img: '../assets/images/ps5manette.jpg',brand:'PlayStation',name:'Ps5 Remote Army',price:'$ 60.00',discount:'' },
  ];
  slideConfig = {dots:true,loop:false,draggable:false, slidesToShow: 4, slidesToScroll: 4,arrows:false,mobileFirst: true,customPaging: function (slider:any, i:any) {
    return '<button class="custom-dot">' + (i + 1) + '</button>';
  },
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],};
 

}
