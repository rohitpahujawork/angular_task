import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-latestnews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './latestnews.component.html',
  styleUrl: './latestnews.component.css'
})
export class LatestnewsComponent {
  cards = [
    {
      image: 'assets/pexels-rodnae-productions-6936384 1.jpg',
      category: 'COMPANY',
      title: 'We can blend colors multiple ways, the most common',
      styling:'border-radius: 15px; box-shadow: 20px 20px 0px'
    },
    {
      image: 'assets/pexels-rodnae-productions-6936384 2.jpg',

      category: 'MARKETING EVENT',
      title: 'How To Blow Through Capital At An Incredible Rate'
    },
    {
      image: 'assets/pexels-rodnae-productions-6936384 3.jpg',

      category: 'CUSTOMER SERVICES',
      title: 'Design Studios That Everyone Should Know About?'
    },
    {
      image: 'assets/pexels-rodnae-productions-6936384 4.jpg',

      category: 'COMPANY',
      title: 'We can blend colors multiple ways, the most common'
    },
    {
      image: 'assets/pexels-rodnae-productions-6936384 5.jpg',

      category: 'MARKETING EVENT',
      title: 'How To Blow Through Capital At An Incredible Rate'
    },
    {
      image: 'assets/pexels-rodnae-productions-6936384 6.jpg',

      category: 'CUSTOMER SERVICES',
      title: 'Design Studios That Everyone Should Know About?'
    }
    // Add more cards here if needed
  ];
}
