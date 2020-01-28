import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { map, catchError } from 'rxjs/operators';
import { IProject, IUser } from '../interfaces';

// import { ICategory, IProduct, IProductItem, ITeam } from '../app/shared/interfaces';

@Injectable({
    providedIn: 'root'
})
export class ProjectsService {

    projectUrl: string = 'https://angulardemo-12279.firebaseio.com/projects';
    baseUrl: string = 'api/';
    constructor(private http: HttpClient) { }

    getProjects(): Observable<IProject[]> {
        return this.http.get<IProject[]>(this.projectUrl + '.json')
            .pipe(
                catchError(this.handleError)
            );
    }

    getAllProjects(): Observable<IProject[]> {
        return this.http.get<IProject[]>(this.baseUrl + 'getProjects.php')
            .pipe(
                catchError(this.handleError)
            )
    }

    getProject(id: number): Observable<IProject> {
        return this.http.get<IProject[]>(this.baseUrl + 'projects.json')
            .pipe(
                map(projects => {
                    let project = projects.filter((pro: IProject) => pro.id === id);
                    console.log("proserv" + project);
                    return (project && projects.length) ? project[0] : null;
                }),
                catchError(this.handleError)
            );
    }

    getUser(id: number): Observable<IUser> {
        return this.http.get<IUser[]>(this.baseUrl + 'users.json')
            .pipe(
                map(users => {
                    let user = users.filter((user: IUser) => user.id === id);
                    console.log("proserv" + user);
                    return (user && users.length) ? user[0] : null;
                }),
                catchError(this.handleError)
            );
    }
    private handleError(error: any) {
        console.log("error");
        console.error('server error:', error);
        if (error.error instanceof Error) {
            const errMessage = error.error.message;
            return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'Node.js server error');
    }
    public uploadFile(data) {
        let uploadURL = 'api/upload.php';
        return this.http.post<any>(uploadURL, data);
      }

}