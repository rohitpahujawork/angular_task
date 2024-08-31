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
      image: 'path_to_image1.jpg',
      category: 'COMPANY',
      title: 'We can blend colors multiple ways, the most common'
    },
    {
      image: 'path_to_image2.jpg',
      category: 'MARKETING EVENT',
      title: 'How To Blow Through Capital At An Incredible Rate'
    },
    {
      image: 'path_to_image3.jpg',
      category: 'CUSTOMER SERVICES',
      title: 'Design Studios That Everyone Should Know About?'
    },
    {
      image: 'path_to_image1.jpg',
      category: 'COMPANY',
      title: 'We can blend colors multiple ways, the most common'
    },
    {
      image: 'path_to_image2.jpg',
      category: 'MARKETING EVENT',
      title: 'How To Blow Through Capital At An Incredible Rate'
    },
    {
      image: 'path_to_image3.jpg',
      category: 'CUSTOMER SERVICES',
      title: 'Design Studios That Everyone Should Know About?'
    }
    // Add more cards here if needed
  ];
}
