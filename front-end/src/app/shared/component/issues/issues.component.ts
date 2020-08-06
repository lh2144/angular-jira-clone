import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Issue } from 'app/shared/service';
import { FormControl } from '@angular/forms';
import { QuillToolbarConfig } from 'ngx-quill';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit, OnChanges {

  @Input() public issue: Issue;
  public isEditing: boolean;
  public descpControl: FormControl;
  public editorOptions: QuillToolbarConfig;
  public commentControl: FormControl;
  constructor() { }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('issue')) {
      if (changes['issue'].previousValue !== changes['isse'].currentValue) {
        this.descpControl = new FormControl(this.issue.description);
      }
    }
  }
  public ngOnInit(): void {
  }

  public editorCreated(): void { }

}
