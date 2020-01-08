import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProjectComponent } from './add-project/add-project.component';

import {FileUploadModule} from 'primeng/fileupload';


@NgModule({
  declarations: [AddProjectComponent],
  imports: [
    CommonModule,
    FileUploadModule
  ],
  exports : [
    AddProjectComponent
  ]
})
export class AdminModule { }
