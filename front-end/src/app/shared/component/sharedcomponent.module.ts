import { NgModule } from '@angular/core';

import { InputComponent } from './input';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { IssueCardComponent } from './issue-card/issue-card.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { IssuesComponent } from './issues/issues.component';
import { QuillModule } from 'ngx-quill';
import { MatDialogModule } from '@angular/material/dialog';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { IssueNewComponent } from './issue-new/issue-new.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    MatDialogModule,
    RouterModule,
    QuillModule.forRoot()
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    IssueCardComponent,
    IssuesComponent,
    NavbarComponent,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    DragDropModule
  ],
  declarations: [
    InputComponent,
    ButtonComponent,
    IssueCardComponent,
    IssuesComponent,
    NavbarComponent,
    IssueNewComponent
  ],
  providers: [],
})
export class SharedComponentModule { }
