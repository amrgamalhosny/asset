import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { BannerComponent } from './home/banner/banner.component';
import { FormsModule } from '@angular/forms';
import { BannerSearchPipe } from '../shared/pipes/banner-search.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchPipe } from '../shared/pipes/search.pipe';


import { LatestProjectsComponent } from './home/latest-projects/latest-projects.component';
import { NewsComponent } from './home/news/news.component';
import { CustomersComponent } from './home/customers/customers.component';
import { SolutionsComponent } from './home/solutions/solutions.component';
import { CarouselModule } from 'primeng/carousel';
import { FooterComponent } from './home/footer/footer.component';

@NgModule({

  declarations: [HomeComponent, SearchComponent, BannerComponent,BannerSearchPipe, NavbarComponent, LatestProjectsComponent, 
    NewsComponent, CustomersComponent, SolutionsComponent, FooterComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  exports : [
    BannerComponent,CarouselModule, LatestProjectsComponent, NewsComponent, CustomersComponent, SolutionsComponent, FooterComponent
  ]
})
export class CoreModule { }
