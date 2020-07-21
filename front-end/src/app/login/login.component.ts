import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'my-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public isAuth: boolean = false;
  public control: string[] = ['eamil', 'project', 'comfirm'];
  constructor(public fb: FormBuilder) {}

  public ngOnInit(): void {
    this.form = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  public openResetModal(): void {
    // wip
  }
}
