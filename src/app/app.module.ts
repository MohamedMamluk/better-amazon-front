import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MainComponent } from './components/main/main.component';
import { ProductComponent } from './components/product/product.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { HttpClientModule } from '@angular/common/http';
import { LandingPageModule } from './landing-page/landing-page.module';
import { FooterComponent } from './footer/footer.component';
import { ProductsPageModule } from './products-page/products-page.module';
import { StarRatingComponent } from './star-rating/star-rating.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    MainComponent,
    ProductComponent,
    CategoriesComponent,
    FooterComponent,
    // StarRatingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    NgxMatSelectSearchModule,
    MatSelectModule,
    HttpClientModule,
    LandingPageModule,
    ProductsPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
