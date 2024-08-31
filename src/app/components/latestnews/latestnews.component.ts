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
      styling:'border-radius: 15px; box-shadow: 20px 20px 0px #FFB6C1'
    },
    {
      image: 'assets/pexels-rodnae-productions-6936384 2.jpg',
      category: 'MARKETING EVENT',
      title: 'How To Blow Through Capital At An Incredible Rate',
      styling:'border-radius: 15px; box-shadow: 20px 20px 0px #ADD8E6'

    },
    {
      image: 'assets/pexels-rodnae-productions-6936384 3.jpg',
      category: 'CUSTOMER SERVICES',
      title: 'Design Studios That Everyone Should Know About?',
      styling:'border-radius: 15px; box-shadow: 20px 20px 0px #FFB6C1'
    },
    {
      image: 'assets/pexels-rodnae-productions-6936384 4.jpg',
      category: 'COMPANY',
      title: 'We can blend colors multiple ways, the most common',
      styling:'border-radius: 15px; box-shadow: 20px 20px 0px #ADD8E6'

    },
    {
      image: 'assets/pexels-rodnae-productions-6936384 5.jpg',
      category: 'MARKETING EVENT',
      title: 'How To Blow Through Capital At An Incredible Rate',
      styling:'border-radius: 15px; box-shadow: 20px 20px 0px #FFB6C1'
    },
    {
      image: 'assets/pexels-rodnae-productions-6936384 6.jpg',
      category: 'CUSTOMER SERVICES',
      title: 'Design Studios That Everyone Should Know About?',
      styling:'border-radius: 15px; box-shadow: 20px 20px 0px #ADD8E6'
    }
    // Add more cards here if needed
  ];

  getStyle(styling: string, property: string): string {
    const styles = styling.split(';').map(style => style.split(':'));
    const styleMap = new Map(styles.map(([key, value]) => [key.trim(), value.trim()]));
    return styleMap.get(property) || '';
  }
}
