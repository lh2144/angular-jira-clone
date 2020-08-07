import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Issue, ProjectService, User } from 'app/shared/service';
import { MatDialog } from '@angular/material/dialog';
import { IssuesComponent } from '../issues/issues.component';
import { IssuesUtil } from 'app/shared/service/util/issue-icon-type';

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
  constructor(public projectService: ProjectService, public diaLog: MatDialog) { }

  public ngOnChanges(changes: SimpleChanges): void {
    // this.assignee = this.projectService.getAssignees(this.issue.id);
    if (changes.hasOwnProperty('issue')) {
      const issueChange = changes['issue'];
      if (issueChange.previousValue !== issueChange.currentValue) {
        const iconType = IssuesUtil.getIssueTypeIcon(this.issue.type);
        this.issueTypeIcon = iconType.icon;
        this.iconClass = iconType.class;
      }
    }
  }

  public ngOnInit(): void {
    this.assignee = this.projectService.getAssignees(this.issue.id);
  }

  public openModel(): void {
    this.diaLog.open(IssuesComponent, {
      minWidth: '700px',
      minHeight: '680px',
      maxWidth: '1000px',
      autoFocus: false,
      data: { issue: this.issue }
    });
  }
}
