import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/shared/services/projects.service';
import { IProject } from 'src/app/shared/interfaces';
import {Router} from "@angular/router";

@Component({
  selector: 'app-latest-projects',
  templateUrl: './latest-projects.component.html',
  styleUrls: ['./latest-projects.component.css'],
})

export class LatestProjectsComponent implements OnInit {
  cars: any[];
  projects: IProject[];

  constructor(private dataService: ProjectsService, private router: Router) {

  }

  ngOnInit() {

    this.dataService.getAllProjects()
    .subscribe((projects: IProject[])=>{
      this.projects = projects
    });
    
  }

  getCategory(){
  }

  goToDetails(project){
    console.log(project.id);
    this.router.navigate(['project', project.id]);
  }

}
