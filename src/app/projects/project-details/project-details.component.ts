import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from 'src/app/shared/services/projects.service';
import { IProject, IMockup } from 'src/app/shared/interfaces';
import {Router} from "@angular/router";

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

  mockups: IMockup[];
  laptopMockups: IMockup[];
  tabletMockups: IMockup[];
  mobileMockups: IMockup[];

  constructor(private dataService: ProjectsService, private activatedRoute: ActivatedRoute , private router: Router) { }

  ngOnInit() {

    let id = +this.activatedRoute.snapshot.paramMap.get('id');

    this.dataService.getProject(id)
      .subscribe((project: IProject) => {
        this.project = project;
        console.log(this.project.id);
      });


    this.dataService.getMockups(id)
      .subscribe((mockups: IMockup[]) => {
        this.mockups = mockups;

        for (var i = 0; i < this.mockups.length; i++) {
          if (this.mockups[i].type == "0") {
            console.log("laptoppp");
            this.laptopMockups.push(this.mockups[i]);
          }
          else if (this.mockups[i].type == "1") {
            this.mobileMockups.push(this.mockups[i]);
          }
          else {
            this.tabletMockups.push(this.mockups[i]);  
          }
        }
      });

  
    this.dataService.getAllProjects()
      .subscribe((projects: IProject[]) => {
        this.projects = projects
      });

  }

  goToDetails(project){
    console.log(project.id);
    this.router.navigate(['project', project.id]);
  }

}
