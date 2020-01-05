import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProjectComponent } from './add-project/add-project.component';



@NgModule({
  declarations: [AddProjectComponent],
  imports: [
    CommonModule
  ],
  exports : [
    AddProjectComponent
  ]
})
export class AdminModule { }
