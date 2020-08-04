import { Component, OnInit } from '@angular/core';
import { ProjectService, IssueStatus } from 'app/shared/service';

@Component({
  selector: 'my-board-filter',
  templateUrl: './board-filter.component.html',
  styleUrls: ['./board-filter.component.scss']
})
export class BoardFilterComponent implements OnInit {

  public useIdToggle: boolean = false;
  public statusToggle: boolean = false;
  constructor(public projectService: ProjectService) {
  }

  public ngOnInit(): void {
  }



  public toggleSearch(query: string): void {
    if (query === 'onlyme') {
      if (!this.useIdToggle) {
        this.projectService.searchQuery.next({ userId: 'onlyme' });
        this.useIdToggle = !this.useIdToggle;
      } else {
        this.projectService.searchQuery.next({});
        this.useIdToggle = !this.useIdToggle;
      }
    }
    if (query === 'Done') {
      if (!this.statusToggle) {
        this.projectService.searchQuery.next({ status: IssueStatus.DONE });
        this.statusToggle = !this.statusToggle;
      } else {
        this.projectService.searchQuery.next({});
        this.statusToggle = !this.statusToggle;
      }
    }
  }

  public formSearchTerm(event: any): void {
    this.projectService.searchQuery.next({ searchTerm: event });
  }
}
