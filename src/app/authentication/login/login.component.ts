import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/shared/loader/loader.service';
import { MessagesTypeEnum } from 'src/app/shared/enum/MessagesTypeEnum';
import { MessagesHelper } from 'src/app/shared/Helper/MessagesService';
import { FormBase } from 'src/app/shared/Helper/FormBase';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { LoginModel } from '../auth.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends FormBase implements OnInit {

  showPassword: boolean = false;
  serverSideMessage: string = "";
  showServerSideMessage: boolean = false;
  constructor(
    private fb: FormBuilder,
    _msgs: MessagesHelper,
    private _authService: AuthService,
    private _loader: LoaderService,
    private router: Router) {
    super(_msgs);
  }

  ngOnInit() {
    this.createLoginForm()
  }

  showPasswordFn() {
    this.showPassword = !this.showPassword
  }

  Login() {
    if (this.validateForm().length > 0) {
      return;
    }

    this._loader.show();
    this.showServerSideMessage = false;
    let formData: LoginModel = <LoginModel>this.formObject.value;

    this._authService.login(formData).subscribe(
      data => {
        localStorage.setItem('jwtToken', data.jwt);
        localStorage.setItem('username', formData.username);
        this._loader.hide();
        this.router.navigate(['admin'])
      },
      err => {
        console.log(err);
        // this.formObject.reset()
        this._loader.hide();
        this.showServerSideMessage = true;
        this.serverSideMessage = err.error.text;
      }
    );

  }


  createLoginForm() {
    this.formObject = this.fb.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required]],
    });
  }


}
