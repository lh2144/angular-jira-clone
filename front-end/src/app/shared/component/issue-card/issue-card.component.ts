import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Issue, ProjectService, User, IssueType } from 'app/shared/service';

@Component({
  selector: 'my-issue-card',
  templateUrl: './issue-card.component.html',
  styleUrls: ['./issue-card.component.scss'],
})
export class IssueCardComponent implements OnInit, OnChanges {

  @Input() public issue: Issue;
  public assignee: User[];
  public issueTypeIcon: string;
  public iconClass: string;
  constructor(public projectService: ProjectService) { }

  public ngOnChanges(changes: SimpleChanges): void {
    // this.assignee = this.projectService.getAssignees(this.issue.id);
    if (changes.hasOwnProperty('issue')) {
      const issueChange = changes['issue'];
      if (issueChange.previousValue !== issueChange.currentValue) {
        switch (this.issue.type) {
          case IssueType.TASK:
            this.issueTypeIcon = 'check_circle';
            this.iconClass = 'icon-task';
            break;
          case IssueType.STORY:
            this.issueTypeIcon = 'bookmark';
            this.iconClass = 'icon-story';
            break;
          case IssueType.BUG:
            this.issueTypeIcon = 'info';
            this.iconClass = 'icon-bug';
            break;
        }
      }
    }
  }

  public ngOnInit(): void {
    this.assignee = this.projectService.getAssignees(this.issue.id);
  }

}
