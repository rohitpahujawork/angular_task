import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { FeaturesComponent } from './components/features/features.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { FooterComponent } from './components/footer/footer.component';
import { LatestnewsComponent } from './components/latestnews/latestnews.component';
<<<<<<< Updated upstream
import { TestimonialSectionComponent } from './components/testimonial-section/testimonial-section.component';
import { FrequetlyAskedComponent } from './components/frequetly-asked/frequetly-asked.component';
=======
import { ContactFormComponent } from './components/contact-form/contact-form.component';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FeaturesComponent,
    TestimonialsComponent,
    FooterComponent,
    LatestnewsComponent,
<<<<<<< Updated upstream
    FrequetlyAskedComponent
=======
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    HeaderComponent,
    BannerComponent,
    FeaturesComponent,
    TestimonialsComponent,
    FooterComponent,
<<<<<<< Updated upstream
    LatestnewsComponent
    TestimonialSectionComponent,
    FrequetlyAskedComponent
  ],
  imports: [
    BrowserModule,
=======
    LatestnewsComponent,
>>>>>>> Stashed changes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
