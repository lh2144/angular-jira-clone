import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { IssueStatusDisplay, Issue, ProjectService, IssueStatus } from 'app/shared/service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
@Component({
  selector: 'my-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BoardListComponent implements OnInit {

  @Input() public status: IssueStatus;
  public issues: Issue[];
  public statusDisplay: any = IssueStatusDisplay;
  constructor(public projectService: ProjectService) { }

  public ngOnInit(): void {
    this.issues = this.projectService.getIssueByStatus(this.status);
  }

  get issueCount(): number {
    return this.issues.length;
  }

  public drop(event: CdkDragDrop<Issue[]>): void {
    const dropIssue: Issue = event.item.data;
    const newIssues = event.container.data;
    if (event.previousContainer === event.container) {
      moveItemInArray(this.issues, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        newIssues,
        event.previousIndex,
        event.currentIndex
      );
      dropIssue.status = event.container.id as IssueStatus;
    }

  }
}
