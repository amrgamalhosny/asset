import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { CarouselModule } from 'primeng/carousel';
import { DragScrollModule } from 'ngx-drag-scroll';




@NgModule({
  declarations: [ProjectsListComponent, ProjectDetailsComponent],
  imports: [
    CommonModule,
    CarouselModule,
    DragScrollModule
  ],
  exports: [ProjectsListComponent, ProjectDetailsComponent]
})
export class ProjectsModule { }
