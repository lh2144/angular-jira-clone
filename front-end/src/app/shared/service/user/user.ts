export class User {
  public id: string;
  public name: string;
  public email: string;
  public avatarUrl: string;
  public createdAt: string;
  public updatedAt: string;
  public issueIds: string[];

  constructor(userObj: any) {
    this.id = userObj.id;
    this.name = userObj.name;
    this.email = userObj.email;
    this.avatarUrl = userObj.avatarUrl;
    this.createdAt = userObj.createdAt;
    this.updatedAt = userObj.updateAt;
    this.issueIds = [];
    userObj.issueIds.forEach((id: string) => {
      this.issueIds.push(id);
    });
  }
}
