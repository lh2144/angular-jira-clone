import { User } from '../user/user';

export class Comment {
  public id: string;
  public body: string;
  public createdAt: string;
  public updatedAt: string;
  public issueId: string;
  public userId: string;
  // mapped to display by userId
  public user: User;
  constructor(issueId: string, user: User) {
    const now = new Date();
    this.id = `${now.getTime()}`;
    this.issueId = issueId;
    this.user = user;
    this.createdAt = now.toISOString();
    this.updatedAt = now.toISOString();
  }
}
