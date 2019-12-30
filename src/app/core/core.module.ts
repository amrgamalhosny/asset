import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { BannerComponent } from './home/banner/banner.component';
import { FormsModule } from '@angular/forms';
import { BannerSearchPipe } from '../shared/pipes/banner-search.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SearchPipe } from '../shared/pipes/search.pipe';

@NgModule({
  declarations: [HomeComponent, SearchComponent, BannerComponent,BannerSearchPipe,SearchPipe],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  exports : [
    BannerComponent,
    SearchComponent
  ]
})
export class CoreModule { }
