import { Component, OnInit } from '@angular/core';
import { IssueStatus, ProjectService, Issue } from 'app/shared/service';

@Component({
  selector: 'my-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  public issues: Array<Issue[]>;
  public issueStatus: IssueStatus[] = [
    IssueStatus.BACKLOG,
    IssueStatus.SELECTED,
    IssueStatus.IN_PROGRESS,
    IssueStatus.DONE
  ];
  constructor(public projectService: ProjectService) {
    this.projectService.issueUpdate$.subscribe(flag => {
      if (flag) {
        // this.issues = [...this.projectService.issues];
        this.getIssues();
      }
    });
  }

  public ngOnInit(): void {
    this.getIssues();
  }

  public getIssues(): void {
    const temp = [];
    this.issueStatus.forEach(status => {
      temp.push(this.projectService.getIssueByStatus(status));
    });
    this.issues = temp;
  }

}
