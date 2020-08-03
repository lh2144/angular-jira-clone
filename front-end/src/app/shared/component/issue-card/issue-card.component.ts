import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Issue, ProjectService, User } from 'app/shared/service';

@Component({
  selector: 'my-issue-card',
  templateUrl: './issue-card.component.html',
  styleUrls: ['./issue-card.component.scss'],
})
export class IssueCardComponent implements OnInit, OnChanges {

  @Input() public issue: Issue;
  public assignee: User[];
  constructor(public projectService: ProjectService) { }

  public ngOnChanges(): void {
    // this.assignee = this.projectService.getAssignees(this.issue.id);
  }

  public ngOnInit(): void {
    this.assignee = this.projectService.getAssignees(this.issue.id);
  }

}
