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
import { SelectComponent } from './select/select.component';
import { GoogleChartsModule } from 'angular-google-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    MatDialogModule,
    GoogleChartsModule,
    RouterModule,
    QuillModule.forRoot()
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    IssueCardComponent,
    IssuesComponent,
    NavbarComponent,
    SelectComponent,
    ReactiveFormsModule,
    CommonModule,
    GoogleChartsModule,
    FormsModule,
    DragDropModule,
  ],
  declarations: [
    InputComponent,
    ButtonComponent,
    IssueCardComponent,
    IssuesComponent,
    NavbarComponent,
    IssueNewComponent,
    SelectComponent,
  ],
  providers: [],
})
export class SharedComponentModule { }
