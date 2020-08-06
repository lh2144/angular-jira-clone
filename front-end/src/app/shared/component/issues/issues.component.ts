import { Component, OnInit, Input, OnChanges, SimpleChanges, Inject } from '@angular/core';
import { Issue, ProjectService, User } from 'app/shared/service';
import { FormControl } from '@angular/forms';
import { QuillToolbarConfig } from 'ngx-quill';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { getIssueTypeIcon } from 'app/shared/service/util/issue-icon-type';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit, OnChanges {

  @Input() public issue: Issue;
  public isEditing: boolean = false;
  public descpControl: FormControl;
  public editorOptions: QuillToolbarConfig;
  public commentControl: FormControl;
  public iconType: string;
  public iconClass: string;
  public reporter: User;
  public assignees: User[];

  constructor(
    public dialogRef: MatDialogRef<IssuesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public projectService: ProjectService
  ) { }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('issue')) {
      if (changes['issue'].previousValue !== changes['isse'].currentValue) {
        this.descpControl = new FormControl(this.issue.description);
      }
    }
  }

  public ngOnInit(): void {
    this.issue = this.data.issue;
    this.descpControl = new FormControl(this.issue.description);
    this.commentControl = new FormControl();
    const icon = getIssueTypeIcon(this.issue.type);
    this.iconType = icon.icon;
    this.iconClass = icon.class;
    this.reporter = this.projectService.getReporter(this.issue.reporterId);
    this.assignees = this.projectService.getAssignees(this.issue.id);
  }

  public editorCreated(): void { }

  public closeModel(): void {
    this.dialogRef.close();
  }

  public deleteIssue(): void {

  }
}
