import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './hero/hero.component';
import { SwiperModule } from 'swiper/angular';
import { SectionComponent } from './section/section.component';
import { CategorySliderComponent } from './category-slider/category-slider.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    SectionComponent,
    CategorySliderComponent,
  ],
  imports: [CommonModule, SwiperModule],
})
export class LandingPageModule {}
