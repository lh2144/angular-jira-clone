import { Component, OnInit, OnChanges, SimpleChanges, Inject, Input } from '@angular/core';
import { Issue, ProjectService, User, IssueType } from 'app/shared/service';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IssueTypeUtil } from 'app/shared/service/util/issue-icon-type';
import { quillConfiguration } from 'app/shared/service/util/quill-config';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit, OnChanges {

  @Input() public issue: Issue;
  public isDescpEditing: boolean = false;
  public isCommentEditing: boolean = false;
  public descpControl: FormControl;
  public editorOptions: any = quillConfiguration;
  public commentControl: FormControl;
  public titleControl: FormControl;
  public iconType: string;
  public iconClass: string;
  public reporter: User;
  public assignees: User[];
  public title: string;
  public issueType: any;
  public toggleDropDown: boolean = false;

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
    this.titleControl = new FormControl();
    const icon = IssueTypeUtil.getIssueTypeIcon(this.issue.type);
    this.iconType = icon.icon;
    this.iconClass = icon.class;
    this.getTypeDropDown(this.issue.type);
    this.reporter = this.projectService.getReporter(this.issue.reporterId);
    this.assignees = this.projectService.getAssignees(this.issue.id);
    this.title = this.issue.title;
  }

  public getTypeDropDown(cur: IssueType): void {
    const temp = { ...IssueTypeUtil.issuetypes };
    delete temp[cur];
    this.issueType = [];
    for (const pro in temp) {
      if (temp.hasOwnProperty(pro)) {
        this.issueType.push(temp[pro]);
      }
    }
  }
  public editorCreated(evn: any): void {
    // tslint:disable-next-line: no-unused-expression
    evn.focus && evn.focus();
  }

  public closeModel(): void {
    this.dialogRef.close();
  }

  public deleteIssue(): void {

  }

  public saveDescription(): void {
    const payload = {
      id: this.issue.id,
      description: this.descpControl.value
    };
    this.projectService.updateIssue(payload);
  }

  public updateTitle(): void {
    const payload = {
      id: this.issue.id,
      title: this.title
    };
    this.projectService.updateIssue(payload);
  }

  public updateType(): void {

  }
}
