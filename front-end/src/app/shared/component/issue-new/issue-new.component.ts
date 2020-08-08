import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User, ProjectService } from 'app/shared/service';
import { quillConfiguration } from 'app/shared/service/util/quill-config';
import { IssuesUtil } from '../../service/util/issue-icon-type';
import { Option } from 'typings/common';

@Component({
  selector: 'app-issue-new',
  templateUrl: './issue-new.component.html',
  styleUrls: ['./issue-new.component.scss']
})
export class IssueNewComponent implements OnInit {

  public issueForm: FormGroup;
  public allUsers: User[];
  public avaAssignees: User[];
  public editorConfig: any = quillConfiguration;
  public issueType: Option[];
  public priority: Option[];
  public userOptions: Option[];
  public assigneeOptions: Option[];

  constructor(public projectService: ProjectService, public fb: FormBuilder) { }

  public ngOnInit(): void {
    this.allUsers = this.projectService.users;
    this.initForm();
    this.issueType = Object.values(IssuesUtil.issuetypes);
    this.getpriorityOption();
    this.getUserOptions();
  }

  public initForm(): void {
    this.issueForm = this.fb.group({
      type: [null, []],
      priority: [null, []],
      summary: [null, []],
      description: [null, []],
      reporter: [null, []],
      assginee: [null, []]
    });
  }

  public getpriorityOption(): void {
    const options = [];
    IssuesUtil.issuePriority.forEach((item) => {
      const option = {
        type: item
      };
      options.push(option);
    });
    this.priority = options;
  }

  public getUserOptions(): void {
    const options = [];
    this.allUsers.forEach((user) => {
      const option = {
        type: user.name,
        img: user.avatarUrl
      };
      options.push(option);
    });
    this.userOptions = options;
  }

  public saveIssue(): void { }

  public reset(): void { }
}
