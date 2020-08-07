import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
// import { ProjectService } from '../project';

@Injectable({ providedIn: 'root' })
export class UserService {
  public currentUser: User;
  constructor(public http: HttpClient) {
    // this.currentUser = { ...this.projectService.users[0] };
  }

}
