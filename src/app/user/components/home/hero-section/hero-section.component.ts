import { Component } from '@angular/core';


@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {

  ngOnInit(): void { }
  slides = [
    { img: 'assets/images/watch.png', alt: 'Watch' },
    { img: 'assets/images/hero.png', alt: 'Hero' }
  ];

  slideConfig = {dots:false,loop:true,draggable:false,arrows:false,mobileFirst: true,autoplay: true,autoplaySpeed: 3000,speed: 600,cssEase: 'linear',slidesToShow: 1,slidesToScroll: 1,};

}
