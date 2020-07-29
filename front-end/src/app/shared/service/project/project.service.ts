import { Injectable } from '@angular/core';
import { Project } from './project';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/Operators';
import { UserService } from '../user';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  public porject: Project;
  public base: string = 'localhost:3000';
  constructor(public httpClient: HttpClient, public userService: UserService) { }

  public getProject(): Observable<Project> {

    return this.httpClient.get<Project>(`${this.base}/project`).pipe(tap((project: Project) => {
      this.porject = new Project(project);
      this.userService.user = this.porject.users;
    }));
  }
}
