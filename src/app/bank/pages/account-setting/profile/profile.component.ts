import { Component, OnInit } from '@angular/core';
import { FormBase } from 'src/app/shared/Helper/FormBase';
import { FormBuilder } from '@angular/forms';
import { MessagesHelper } from 'src/app/shared/Helper/MessagesService';
import { LoaderService } from 'src/app/shared/loader/loader.service';
import { AccountSettingService } from '../account-setting.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends FormBase implements OnInit {
  userContext: any;
  userDisplayName:string=""
  constructor(
    private fb: FormBuilder,
    _msgs: MessagesHelper,
    private _accountService: AccountSettingService,
    private _loader: LoaderService) {
    super(_msgs);
  }

  ngOnInit() {
    this.userContext = JSON.parse(localStorage.getItem("userContext"));
    this.userDisplayName = localStorage.getItem("userDisplayName");
    this.createUpdateUserForm();

    this.formObject.controls['name'].setValue(this.userDisplayName);
    this.formObject.controls['username'].setValue(this.userContext.username);
    this.formObject.controls['email'].setValue(this.userContext.email);
  }

  createUpdateUserForm() {
    this.formObject = this.fb.group({
      name: [""],
      username: [""],
      email: [""]
    });
  }

  updateUserDisplayName() {
    if (this.validateForm().length > 0) {
      return;
    }

    this._loader.show();
    let newName = this.formObject.controls['name'].value;
    this._accountService.updateUserDisplayName(newName).subscribe(
      data => {
        localStorage.setItem("userDisplayName",newName);
        location.reload();
        this._loader.hide();
      },
      err => {
        console.log(err);
        this._loader.hide();
      }
    );
  }

}
