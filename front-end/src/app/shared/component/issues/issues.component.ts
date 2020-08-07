import { Component, OnInit, OnChanges, SimpleChanges, Inject, Input } from '@angular/core';
import { Issue, ProjectService, User, IssueType, IssueStatus } from 'app/shared/service';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IssuesUtil } from 'app/shared/service/util/issue-icon-type';
import { quillConfiguration } from 'app/shared/service/util/quill-config';
import { IconType } from 'typings/common';
import { CommentService } from 'app/shared/service/comment/comment.service';

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
  public toggleDropDownT: boolean = false;
  public toggleDropDownS: boolean = false;
  public toggleDropDownR: boolean = false;
  public statusArray: IssueStatus[];
  public allUsers: User[];

  constructor(
    public dialogRef: MatDialogRef<IssuesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public projectService: ProjectService,
    public commentService: CommentService
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
    const icon = IssuesUtil.getIssueTypeIcon(this.issue.type);
    this.iconType = icon.icon;
    this.iconClass = icon.class;
    this.getTypeDropDown(this.issue.type);
    this.getStatusDropDown(this.issue.status);
    this.reporter = this.projectService.getReporter(this.issue.reporterId);
    this.assignees = this.projectService.getAssignees(this.issue.id);
    this.title = this.issue.title;
    this.allUsers = this.projectService.users.filter(user => user.id !== this.reporter.id);
  }

  public getTypeDropDown(cur: IssueType): void {
    const temp = { ...IssuesUtil.issuetypes };
    delete temp[cur];
    this.issueType = [];
    for (const pro in temp) {
      if (temp.hasOwnProperty(pro)) {
        this.issueType.push(temp[pro]);
      }
    }
  }

  public getStatusDropDown(cur: IssueStatus): void {
    this.statusArray = IssuesUtil.issueStatus.filter(item => item !== cur);
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
    this.setEditorMode(false);
  }

  public updateTitle(): void {
    const payload = {
      id: this.issue.id,
      title: this.title
    };
    this.projectService.updateIssue(payload);
  }

  public updateType(type: IconType): void {
    const payload = {
      id: this.issue.id,
      type: type.type
    };
    this.iconClass = type.class;
    this.iconType = type.icon;
    this.getTypeDropDown(type.type as IssueType);
    this.projectService.updateIssue(payload);
  }

  public updateStatus(status: IssueStatus): void {
    const payload = {
      id: this.issue.id,
      status
    };
    this.getStatusDropDown(status);
    this.projectService.updateIssue(payload);
  }

  public updateReporter(newReporter: User): void {
    this.allUsers.unshift(this.reporter);
    this.reporter = newReporter;
    this.allUsers = this.allUsers.filter(user => user.id !== newReporter.id)
  }

  public setEditorMode(val: boolean): void {
    this.isDescpEditing = val;
  }

  public saveComment(): void {
    const body = this.commentControl.value;
    const user = new User();
    this.commentService.updateComment(body, this.issue.id, user as User);
    this.isCommentEditing = false;
  }
}
