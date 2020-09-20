import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: any;

  cols: any[];

  selectedUsers: any[];
  totalRecords: number;
  constructor() { }

  ngOnInit() {
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'username', header: 'User Name' },
      { field: 'email', header: 'Email' },
      { field: 'role', header: 'Role' },
      { field: 'status', header: 'Status' },
      { field: 'actions', header: '' },
    ];
    this.users = [
      { name: "Kamal Mohsen", username: "Kamal_Mohsen", email: "johnnytomas@gogle.com", role: "Maker", status: "Locked" },
      { name: "Hisham Adam", username: "Hisham _Adam", email: "marcoswesson@gogle.com",role: "Maker", status: "Inactive" },
      { name: "Amr Farid", username: "AmrFarid", email: "milanwill@box.com",role: "Checker", status: "Active" },
      { name: "Belal Adel", username: "BelalAdel 12", email: "reedtrent@uji.com",role: "Checker", status: "Active" },
      { name: "Mayar Farouq", username: "May_1", email: "frederickwesson@fepp.com",role: "Checker", status: "Active" },
      { name: "Sara Nour", username: "Sara_23", email: "omarisalvatore@gogle.com",role: "Maker", status: "Active" },
      { name: "Kamal Mohsen", username: "Kamal_Mohsen", email: "johnnytomas@gogle.com",role: "Checker", status: "Locked" },
      { name: "Hisham Adam", username: "Hisham _Adam", email: "marcoswesson@gogle.com",role: "Maker", status: "Inactive" },
      { name: "Amr Farid", username: "AmrFarid", email: "milanwill@box.com",role: "Maker", status: "Active" },
      { name: "Belal Adel", username: "BelalAdel 12", email: "reedtrent@uji.com",role: "Maker", status: "Active" },
      { name: "Mayar Farouq", username: "May_1", email: "frederickwesson@fepp.com",role: "Checker", status: "Active" },
      { name: "Sara Nour", username: "Sara_23", email: "omarisalvatore@gogle.com",role: "Maker", status: "Active" },
      { name: "Kamal Mohsen", username: "Kamal_Mohsen", email: "johnnytomas@gogle.com",role: "Maker", status: "Locked" },
      { name: "Hisham Adam", username: "Hisham _Adam", email: "marcoswesson@gogle.com",role: "Checker", status: "Inactive" },
      { name: "Amr Farid", username: "AmrFarid", email: "milanwill@box.com",role: "Maker", status: "Active" },
      { name: "Belal Adel", username: "BelalAdel 12", email: "reedtrent@uji.com",role: "Maker", status: "Active" },
      { name: "Mayar Farouq", username: "May_1", email: "frederickwesson@fepp.com",role: "Checker", status: "Active" },
      { name: "Sara Nour", username: "Sara_23", email: "omarisalvatore@gogle.com",role: "Maker", status: "Active" },
      { name: "Kamal Mohsen", username: "Kamal_Mohsen", email: "johnnytomas@gogle.com",role: "Maker", status: "Locked" },
      { name: "Hisham Adam", username: "Hisham _Adam", email: "marcoswesson@gogle.com",role: "Checker", status: "Inactive" },
      { name: "Amr Farid", username: "AmrFarid", email: "milanwill@box.com",role: "Maker", status: "Active" },
      { name: "Belal Adel", username: "BelalAdel 12", email: "reedtrent@uji.com",role: "Maker", status: "Active" },
      { name: "Mayar Farouq", username: "May_1", email: "frederickwesson@fepp.com",role: "Checker", status: "Active" },
      { name: "Sara Nour", username: "Sara_23", email: "omarisalvatore@gogle.com",role: "Maker", status: "Active" },
      { name: "Kamal Mohsen", username: "Kamal_Mohsen", email: "johnnytomas@gogle.com",role: "Maker", status: "Locked" },
      { name: "Hisham Adam", username: "Hisham _Adam", email: "marcoswesson@gogle.com",role: "Checker", status: "Inactive" },
      { name: "Amr Farid", username: "AmrFarid", email: "milanwill@box.com",role: "Maker", status: "Active" },
      { name: "Belal Adel", username: "BelalAdel 12", email: "reedtrent@uji.com",role: "Maker", status: "Active" },
      { name: "Mayar Farouq", username: "May_1", email: "frederickwesson@fepp.com",role: "Maker", status: "Active" },
      { name: "Sara Nour", username: "Sara_23", email: "omarisalvatore@gogle.com",role: "Checker", status: "Active" },
      { name: "Kamal Mohsen", username: "Kamal_Mohsen", email: "johnnytomas@gogle.com",role: "Maker", status: "Locked" },
      { name: "Hisham Adam", username: "Hisham _Adam", email: "marcoswesson@gogle.com",role: "Maker", status: "Inactive" },
      { name: "Amr Farid", username: "AmrFarid", email: "milanwill@box.com",role: "Maker", status: "Active" },
      { name: "Belal Adel", username: "BelalAdel 12", email: "reedtrent@uji.com",role: "Maker", status: "Active" },
      { name: "Mayar Farouq", username: "May_1", email: "frederickwesson@fepp.com",role: "Maker", status: "Active" },
      { name: "Sara Nour", username: "Sara_23", email: "omarisalvatore@gogle.com",role: "Maker", status: "Active" },
    ]

    this.totalRecords = this.users.length;
  }

}
