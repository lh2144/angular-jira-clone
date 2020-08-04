import { Component, OnInit, Input } from '@angular/core';
import { IssueStatusDisplay, Issue, ProjectService, IssueStatus } from 'app/shared/service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { debounceTime, distinctUntilChanged } from 'rxjs/Operators';
import { FilterQuery } from 'typings/common';

@Component({
  selector: 'my-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss']
})
export class BoardListComponent implements OnInit {

  @Input() public status: IssueStatus;
  public issues: Issue[];
  public statusDisplay: any = IssueStatusDisplay;
  public preIssue: any = null;
  constructor(public projectService: ProjectService) { }

  public ngOnInit(): void {
    this.issues = this.projectService.getIssueByStatus(this.status);
    this.projectService.searchQuery
      .pipe(
        debounceTime(1000),
        distinctUntilChanged()
      ).subscribe((query: FilterQuery) => {
        const { userId, status, searchTerm } = query;
        if (Object.getOwnPropertyNames(query).length === 0) {
          this.issues = this.projectService.getIssueByStatus(this.status);
        }
        if (Object.getOwnPropertyNames(query).length === 1 && query['searchTerm'] === '') {
          this.issues = this.projectService.getIssueByStatus(this.status);
        }
        this.issues = this.issues.filter((issue: Issue) => {
          const matchTerm = searchTerm ? issue.title.trim().toLowerCase().includes(searchTerm.trim().toLowerCase()) : true;
          const matchUser = userId ? issue.userIds.some((item) => item.includes(userId)) : true;
          const ignorDone = status ? issue.status !== IssueStatus.DONE : true;

          return matchTerm && matchUser && ignorDone;
        });
      });
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
      // wip
      // this.projectService.updateIssueStatus(dropIssue);
    }

  }
}
