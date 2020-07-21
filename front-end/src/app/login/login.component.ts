import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { FormType } from 'app/shared/service';

@Component({
  selector: 'my-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public isAuth: boolean = false;
  public formType: FormType = FormType.LOGIN;
  public control: string[] = ['eamil', 'project', 'comfirm'];
  constructor(public fb: FormBuilder, public router: Router) {}

  public ngOnInit(): void {
    this.form = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  public initialSignUp(): void {
    this.control.forEach((cntrName: string) => {
      const control = new FormControl(null, Validators.required);
      this.form.addControl(cntrName, control);
    });
  }

  public resetForm(): void {
    this.form.reset();
  }

  public openResetModal(): void {
    // wip
    this.formType = FormType.RESET;
  }

  // wip
  public goSignUp(): void {
    this.formType = FormType.SIGNUP;
  }

  public validateNext(): void {
    this.router.navigate(['dashboard']);
  }
}
