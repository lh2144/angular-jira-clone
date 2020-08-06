import { NgModule } from '@angular/core';

import { InputComponent } from './input';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { IssueCardComponent } from './issue-card/issue-card.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { IssuesComponent } from './issues/issues.component';
import { QuillModule } from 'ngx-quill';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    QuillModule.forRoot()
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    IssueCardComponent,
    IssuesComponent,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    DragDropModule
  ],
  declarations: [InputComponent, ButtonComponent, IssueCardComponent, IssuesComponent],
  providers: [],
})
export class SharedComponentModule { }
