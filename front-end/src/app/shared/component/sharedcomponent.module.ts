import { NgModule } from '@angular/core';

import { InputComponent } from './input';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [InputComponent],
  declarations: [InputComponent],
  providers: [],
})
export class SharedComponentModule { }
