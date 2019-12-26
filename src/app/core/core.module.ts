import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { BannerComponent } from './home/banner/banner.component';
import { FormsModule } from '@angular/forms';
import { BannerSearchPipe } from '../shared/pipes/banner-search.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './home/navbar/navbar.component';

@NgModule({
  declarations: [HomeComponent, SearchComponent, BannerComponent,BannerSearchPipe, NavbarComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  exports : [
    BannerComponent
  ]
})
export class CoreModule { }
