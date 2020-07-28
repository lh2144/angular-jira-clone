import { User } from '../user';
import { Issue } from '.';

export enum ProjectCategory {
  SOFTWARE = 'Software',
  MARKETING = 'Marketing',
  BUSINESS = 'Business',
}

export class Projcet {
  public id: string;
  public name: string;
  public url: string;
  public description: string;
  public category: ProjectCategory;
  public createdAt: string;
  public updateAt: string;
  public issues: Issue[] = [];
  public users: User[] = [];

  // tslint:disable-next-line: ban-types
  constructor(projectObj?: Object) {
    if (projectObj) {
      this.id = projectObj['id'];
      this.name = projectObj['name'];
      this.url = projectObj['url'];
      this.description = projectObj['description'];
      this.category = projectObj['category'];
      this.createdAt = projectObj['createdAt'];
      this.updateAt = projectObj['updatedAt'];
      this.issues = [];
      projectObj['issues'].forEach((issue: Issue) => {
        this.issues.push(issue);
      });
      this.users = [];
      projectObj['users'].forEach((user: User) => {
        this.users.push(new User(user));
      });
    }
  }
}
