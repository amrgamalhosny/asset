import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';



@NgModule({
  declarations: [LandingPageComponent, ContactUsComponent],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
