import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditProjectComponent } from './project/add-edit-project/add-edit-project.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FileUploadModule} from 'primeng/fileupload';
import { DragScrollModule } from 'ngx-drag-scroll';


@NgModule({
  declarations: [AddEditProjectComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    DragScrollModule
  ],
  exports:[
    AddEditProjectComponent
  ]
})
export class AdminModule { }
