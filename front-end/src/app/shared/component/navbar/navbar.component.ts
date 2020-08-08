import { Component, OnInit } from '@angular/core';
import { User } from 'app/shared/service';
import { MatDialog } from '@angular/material/dialog';

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
    // this.diaLog.open()
  }

}
