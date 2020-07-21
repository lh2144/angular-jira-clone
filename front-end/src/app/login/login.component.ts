import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'my-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public isAuth: boolean = false;
  public showLogin: boolean = true;
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
  }

  // wip
  public goSignUp(): void {
    this.showLogin = !this.showLogin;
  }

  public validateUser(): void {
    this.router.navigate(['dashboard']);
    // WIP
    // if (this.showLogin) {
    // } else {
    // }
  }
}
