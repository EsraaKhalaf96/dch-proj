import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessagesHelper } from 'src/app/shared/Helper/MessagesService';
import { AccountSettingService } from '../account-setting.service';
import { LoaderService } from 'src/app/shared/loader/loader.service';
import { FormBase } from 'src/app/shared/Helper/FormBase';
import { ChangePassModel } from '../account-setting.model'

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent extends FormBase implements OnInit {

  showPassword: boolean = false;
  showNPassword: boolean = false;
  showCPassword: boolean = false;

  isEightDigit: boolean = false;
  containsCaptialChar: boolean = false;
  containNum: boolean = false;
  containSpecialChar: boolean = false;


  passwordStrengthClass: string = "";
  passwordStrengthPercent: number = 0;
  passwordStrengthString: string = "Poor";

  passwordValue: string = "";
  matchedPasswords: boolean = false;

  // Password Policy Vars
  charSequenceCount: string = "5";
  charSequenceBoolean: boolean = false;
  
  numSequenceCount : string = "3";
  numSequenceBoolean: boolean = false;

  digitsCount :string ="3";
  digitsBoolean:boolean = false;
  
  lowerCharCount : string ="2";
  lowerCharBoolean : boolean = false;

  upperCharCount : string = "2";
  upperCharBoolean: boolean = false;

  specialCharCount: string = "1";
  specialCharBoolean : boolean = false;

  minCharCount: string ="8";
  minCharBoolean : boolean = false;

  maxCharCount: string ="12";
  maxCharBoolean : boolean = false;

  

  constructor(
    private fb: FormBuilder,
    _msgs: MessagesHelper,
    private _accountService: AccountSettingService,
    private _loader: LoaderService) {
    super(_msgs);
  }

  ngOnInit() {
    this.getPasswordPolicy();
    this.createUpdateUserPasswordForm();
  }

  showPasswordFn(type) {
    if (type == 'o') {
      this.showPassword = !this.showPassword
    }
    else if (type == 'n') {
      this.showNPassword = !this.showNPassword
    }
    else if (type == 'c') {
      this.showCPassword = !this.showCPassword
    }
  }

  checkPValue($event) {
    let value = $event.target.value;
    // const isUpperCase = (string) => { return /[A-Z]|[\u0080-\u024F]/.test(string) }
    // const containNum = (string) => { return /\d/.test(string) }
    // const containSpecialChar = (string) => { return /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g.test(string) }

    // Min length
    if (value.length >= this.minCharCount) {
      this.minCharBoolean = true
    } else { 
      this.minCharBoolean = false
    }

    // Max length
    if (value.length < this.maxCharCount) {
      this.maxCharBoolean = true
    } else {
      this.maxCharBoolean = false
    }

    // Digits Count
    if (value.replace(/[^0-9]/g,"").length >= this.digitsCount) {
      this.digitsBoolean = true
    } else {
      this.digitsBoolean = false
    }

    // LowerCase Char Count
    if (value.replace(/[^a-z]/g,"").length >= this.lowerCharCount) {
      this.lowerCharBoolean = true
    } else {
      this.lowerCharBoolean = false
    }

    // UpperCase Char Count
    if (value.replace(/[^A-Z]/g,"").length >= this.upperCharCount) {
      this.upperCharBoolean = true
    } else {
      this.upperCharBoolean = false
    }

    // Special Char Count
    if (value.replace(/[^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/gi,"").length >= this.specialCharCount) {
      this.specialCharBoolean = true
    } else {
      this.specialCharBoolean = false
    }

    // Sequence Char Count
    // if (value.replace(/(.)\1\1/).length >= this.charSequenceCount) {
    //   this.charSequenceBoolean = true
    // } else {
    //   this.charSequenceBoolean = false
    // }
    

    // if (this.isEightDigit || this.containNum || this.containsCaptialChar || this.containsCaptialChar) {
    //   this.passwordStrengthString = "Poor"
    //   this.passwordStrengthClass = "progress-bar-danger";
    //   this.passwordStrengthPercent = 10;
    // }
    // if (this.isEightDigit && this.containNum && this.containsCaptialChar && this.containSpecialChar) {
    //   this.passwordStrengthString = "Strong"
    //   this.passwordStrengthClass = "progress-bar-success";
    //   this.passwordStrengthPercent = 100;
    // }

    if (!value) {
      this.passwordStrengthString = "Poor"
      this.passwordStrengthClass = "progress-bar-danger";
      this.passwordStrengthPercent = 0;
    }

    this.passwordValue = value;

  }

  checkCPValue($event) {
    let value = $event.target.value;
    if (value == this.passwordValue) {
      this.matchedPasswords = true;
    }
    else {
      this.matchedPasswords = false;
    }
  }

  getPasswordPolicy() {
    this._accountService.getPasswordPolicies().subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
    )
  }

  createUpdateUserPasswordForm() {
    this.formObject = this.fb.group({
      old_password: [""],
      new_password: [""]
    });
  }

  updateUserPassword() {
    if (this.validateForm().length > 0) {
      return;
    }

    this._loader.show();
    let formData: ChangePassModel = <ChangePassModel>this.formObject.value;
    this._accountService.updateUserPassword(formData).subscribe(
      data => {
        debugger
        this._loader.hide();
      },
      err => {
        console.log(err);
        this._loader.hide();
      }
    );
  }

}
