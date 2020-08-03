import { Component, OnInit } from '@angular/core';
import { IssueStatus, ProjectService, Issue } from 'app/shared/service';

@Component({
  selector: 'my-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  public issueStatus: IssueStatus[] = [
    IssueStatus.BACKLOG,
    IssueStatus.SELECTED,
    IssueStatus.IN_PROGRESS,
    IssueStatus.DONE
  ];
  constructor(public projectService: ProjectService) { }

  public ngOnInit(): void {
  }

  public getIssues(status: IssueStatus): Issue[] {
    return this.projectService.getIssueByStatus(status);
  }

}
