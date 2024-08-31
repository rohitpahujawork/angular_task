import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  testimonials = [
    {
      quote: "No matter where you go, It's is the coolest, most happening thing around! Not able to tell you how happy I am with it.",
      name: "Jane Cooper",
      company: "Biffco Enterprises Ltd.",
      avatarUrl: "assets/image1.png"
    },
    {
      quote: "Wow what great service, I love it! It's is the most valuable business resource we have EVER purchased. We can't understand how we've been living without it. I couldn't have asked for more than this.",
      name: "Jacob Jones",
      company: "Biffco Enterprises Ltd.",
      avatarUrl: "assets/image1.png"
    },
    {
      quote: "Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business. It has really helped our business. Needless to say we are extremely satisfied with the results.",
      name: "Wade Warren",
      company: "Biffco Enterprises Ltd.",
      avatarUrl: "assets/image1.png"
    },
    {
      quote: "It's is both attractive and highly adaptable. It's exactly what I've been looking for. Definitely worth the investment.",
      name: "Robert Fox",
      company: "Biffco Enterprises Ltd.",
      avatarUrl: "assets/image1.png"
    }
  ];
}
