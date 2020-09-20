import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit() {
  }

  redirctBoardDetails(id) {
    this.router.navigate(['/admin/setup/profiles-details'], {
      queryParams: { 'profileID': id }
    })
  }
}
