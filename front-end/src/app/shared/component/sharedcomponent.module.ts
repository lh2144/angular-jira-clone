import { NgModule } from '@angular/core';

import { InputComponent } from './input';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { IssueCardComponent } from './issue-card/issue-card.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DragDropModule],
  exports: [
    InputComponent,
    ButtonComponent,
    IssueCardComponent,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    DragDropModule
  ],
  declarations: [InputComponent, ButtonComponent, IssueCardComponent],
  providers: [],
})
export class SharedComponentModule { }
