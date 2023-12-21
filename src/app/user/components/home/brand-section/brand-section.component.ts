import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-brand-section',
  templateUrl: './brand-section.component.html',
  styleUrl: './brand-section.component.css',
  standalone:true,
  imports:[SlickCarouselModule]
})
export class BrandSectionComponent {


  brands = [
    {img:'assets/images/brands/brand-apple.png', name:'Apple'},
    {img:'assets/images/brands/brand-honor.png', name:'Honor'},
    {img:'assets/images/brands/brand-htc.png', name:'HTC'},
    {img:'assets/images/brands/brand-huawei.png', name:'Huawei'},
    {img:'assets/images/brands/brand-pixel.png', name:'Pixel'},
    {img:'assets/images/brands/brand-samsung.png', name:'Samsung'},
    {img:'assets/images/brands/brand-ps.png', name:'Playsation'},
    {img:'assets/images/brands/brand-lenevo.png', name:'Lenevo'},
    {img:'assets/images/brands/brand-xbox.png', name:'Xbox'},
    {img:'assets/images/brands/brand-asus.png', name:'Asus'},
    {img:'assets/images/brands/brand-hp.png', name:'hp'},
    {img:'assets/images/brands/brand-casio.png', name:'Casio'},
  ];
  slideConfig = {
    dots:false,
    loop:true,
    draggable:false,
    arrows:false,
    mobileFirst: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 3000,
    cssEase: 'linear',
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };



}
