import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditProjectComponent } from './project/add-edit-project/add-edit-project.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {FileUploadModule} from 'primeng/fileupload';
import { DragScrollModule } from 'ngx-drag-scroll';
import { AddProjectComponent } from './add-project/add-project.component';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';





@NgModule({
  declarations: [AddEditProjectComponent, AddProjectComponent],
  imports: [
    CommonModule,
    FileUploadModule,
    ReactiveFormsModule,
    DragScrollModule,
    DropdownModule,
    FormsModule,
    CalendarModule
    
    
  
  ],
  exports:[
    AddEditProjectComponent,
    AddProjectComponent
  ]
})
export class AdminModule { }
