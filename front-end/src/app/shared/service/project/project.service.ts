import { Injectable } from '@angular/core';
import { Project } from './project';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/Operators';
import { UserService, User } from '../user';
import { environment } from 'environments/environment';
import { Issue, IssueStatus } from './issue';
import { FilterQuery } from 'typings/common';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  public porject: Project;
  public issues: Issue[];
  public users: User[];
  public canLoad: boolean;
  public searchQuery: Subject<FilterQuery> = new Subject<FilterQuery>();
  private issueUpdate: Subject<boolean> = new Subject<boolean>();
  public issueUpdate$: Observable<boolean> = this.issueUpdate.asObservable();
  private base: string = environment.base_api;
  constructor(public httpClient: HttpClient, public userService: UserService) { }

  public getProject(): Observable<Project> {

    return this.httpClient.get<Project>(`${this.base}/project`).pipe(tap((project: Project) => {
      this.porject = new Project(project);
      this.canLoad = true;
      this.setIssues();
      this.setUsers();
    }));
  }

  public setIssues(): void {
    this.issues = Array.from(this.porject.issues);
  }

  public getIssue(id: string): Issue {
    return this.issues.find((issue) => issue.id === id);
  }

  public setUsers(): void {
    this.users = Array.from(this.porject.users);
  }

  public getUser(userId: string): User {
    return this.users.find((user) => user.id === userId);
  }

  public getAssignees(issueId: string): User[] {
    const curIssue = this.getIssue(issueId);
    return curIssue.userIds.map((id) => {
      return this.getUser(id);
    });
  }

  public getIssueByStatus(status: IssueStatus): Issue[] {
    return this.issues.filter((item: Issue) => item.status === status);
  }

  public filterIssue(status: IssueStatus, searchTerm: string): Issue[] {
    return this.issues.filter((item: Issue) => {
      return item.description.includes(searchTerm) && item.status === status;
    });
  }

  public updateIssueStatus(newIssue: Issue): void {
    // wip update be for status change
    console.log(newIssue);
  }

  public getReporter(id: string): User {
    return this.users.find((user: User) => user.id === id);
  }

  public updateIssue(payload: any): any {
    this.issues.forEach((item, index) => {
      if (item.id === payload['id']) {
        for (const prop in payload) {
          if (payload.hasOwnProperty(prop)) {
            this.issues[index] = { ...item, [prop]: payload[prop] };
            this.issueUpdate.next(true);
          }
        }
      }
    });
  }
}
