import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';



@NgModule({
  declarations: [ProjectsListComponent, ProjectDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class ProjectsModule { }
