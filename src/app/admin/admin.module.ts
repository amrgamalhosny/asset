import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditProjectComponent } from './project/add-edit-project/add-edit-project.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FileUploadModule} from 'primeng/fileupload';
import { DragScrollModule } from 'ngx-drag-scroll';
import { AddProjectComponent } from './add-project/add-project.component';




@NgModule({
  declarations: [AddEditProjectComponent],
  imports: [
    CommonModule,
    FileUploadModule
    ,
    ReactiveFormsModule,
    FileUploadModule,
    DragScrollModule
  ],
  exports:[
    AddEditProjectComponent,
    AddProjectComponent
  ]
})
export class AdminModule { }
