import { NgModule } from '@angular/core';

import { InputComponent } from './input';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    InputComponent,
    ButtonComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [InputComponent, ButtonComponent],
  providers: [],
})
export class SharedComponentModule {}
