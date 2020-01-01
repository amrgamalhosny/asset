import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from 'src/app/shared/services/projects.service';
import { IProject } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  id: any;
  project: IProject;
  projects: IProject[];
  hideScrollbar;
  disabled;
  xDisabled;
  yDisabled;
  constructor(private dataService: ProjectsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
   
    let id = +this.activatedRoute.snapshot.paramMap.get('id');

    this.dataService.getProject(id).subscribe((project: IProject)=>{
      this.project = project;
      console.log(this.project.id);
    });

    this.dataService.getAllProjects()
    .subscribe((projects: IProject[])=>{
      this.projects = projects
    });
    
    
  }

}
