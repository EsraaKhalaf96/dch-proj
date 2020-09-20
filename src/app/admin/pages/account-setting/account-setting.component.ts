import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styleUrls: ['./account-setting.component.scss']
})
export class AccountSettingComponent implements OnInit {
  userContext: any;
  userShortName: string = "";
  userDisplayName: string = "";
  constructor() { }

  ngOnInit() {
    this.userContext = JSON.parse(localStorage.getItem("userContext"));
    this.userDisplayName=localStorage.getItem('userDisplayName');
    this.userShortName = this.userDisplayName.match(/\b(\w)/g).join('');
  }


}
