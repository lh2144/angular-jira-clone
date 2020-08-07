import { Injectable } from '@angular/core';
import { ProjectService } from '../project';
import { Comment } from '.';
import { User } from '../user';

@Injectable({ providedIn: 'root' })
export class CommentService {

  constructor(public projectService: ProjectService) { }

  public updateComment(body: string, issueId: string, user: User): void {
    const newComment = new Comment(issueId, user);
    newComment.body = body;
  }
}
