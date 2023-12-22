import { Component } from '@angular/core';

@Component({
  selector: 'app-feature-section',
  templateUrl: './feature-section.component.html',
  styleUrl: './feature-section.component.css',
  standalone:true
})
export class FeatureSectionComponent {

  features= [
    {
      imageUrl: 'assets/images/price-tag.png',
      title: 'Lowest Prices',
      description: 'Benefit from the cheapest prices on high-quality products.'
    },
    {
      imageUrl: 'assets/images/return.png',
      title: 'Easy Returns',
      description: 'Changed your mind? Return your order within 14 days.'
    },
    {
      imageUrl: 'assets/images/secure-payment.png',
      title: 'Secure Payments',
      description: 'All transactions are secure and confidential.'
    },
    {
      imageUrl: 'assets/images/online-chat.png',
      title: 'Service 7d/7',
      description: 'Our team is available 7 days a week to assist you.'
    }
  ];

}
