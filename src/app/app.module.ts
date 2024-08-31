import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { FeaturesComponent } from './components/features/features.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { FooterComponent } from './components/footer/footer.component';
import { LatestnewsComponent } from './components/latestnews/latestnews.component';
import { TestimonialSectionComponent } from './components/testimonial-section/testimonial-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FeaturesComponent,
    TestimonialsComponent,
    FooterComponent,
    LatestnewsComponent
  ],
  imports: [
    BrowserModule,
    HeaderComponent,
    BannerComponent,
    FeaturesComponent,
    TestimonialsComponent,
    FooterComponent,
    LatestnewsComponent
    TestimonialSectionComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
