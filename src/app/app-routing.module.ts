import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { AddEditProjectComponent } from './admin/project/add-edit-project/add-edit-project.component';


const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'addeditproject', component: AddEditProjectComponent},
  { path: 'project/:id', component: ProjectDetailsComponent },
  { path: '', redirectTo: '/addeditproject', pathMatch: 'full' }
  // { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
