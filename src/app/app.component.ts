import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeaturesComponent } from './components/features/features.component';
import { BannerComponent } from './components/banner/banner.component';
import { LatestnewsComponent } from './components/latestnews/latestnews.component';
import { TestimonialSectionComponent } from './components/testimonial-section/testimonial-section.component';
<<<<<<< Updated upstream
import { FrequetlyAskedComponent } from './components/frequetly-asked/frequetly-asked.component';
=======
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
>>>>>>> Stashed changes

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< Updated upstream
  imports: [RouterOutlet, HeaderComponent, TestimonialsComponent, FooterComponent, FeaturesComponent, BannerComponent,LatestnewsComponent, TestimonialSectionComponent,FrequetlyAskedComponent],
=======
  imports: [RouterOutlet, HeaderComponent, TestimonialsComponent, FooterComponent, FeaturesComponent, BannerComponent,LatestnewsComponent, TestimonialSectionComponent, ContactFormComponent, NewsletterComponent],
>>>>>>> Stashed changes
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-project';
}
