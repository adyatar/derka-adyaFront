import { Component } from '@angular/core';
import { Carousel } from 'flowbite';
import type {
    CarouselItem,
    CarouselOptions,
    CarouselInterface,
} from 'flowbite';
import type { InstanceOptions } from 'flowbite';


@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {

  slides = [
    { img: 'assets/images/watch.png', alt: 'Watch' },
  { img: 'assets/images/hero.png', alt: 'Hero' }
    // ... add more slides as needed ...
  ];

  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "dots": false,
    "infinite": false,
    "autoplay": true,
    "autoplaySpeed": 2000
    // ... other slick-carousel configurations ...
  };

}
