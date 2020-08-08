import { Component, OnInit } from '@angular/core';
import { User } from 'app/shared/service';
import { MatDialog } from '@angular/material/dialog';
import { IssueNewComponent } from '../issue-new/issue-new.component';

@Component({
  selector: 'my-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public curUser: User;
  constructor(public diaLog: MatDialog) { }

  public ngOnInit(): void {
  }

  public createIssue(): void {
    this.diaLog.open(IssueNewComponent, {
      minHeight: '700px',
      minWidth: '800px',
      autoFocus: false
    });
  }

}
