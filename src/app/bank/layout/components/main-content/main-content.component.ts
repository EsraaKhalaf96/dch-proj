import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LayoutService } from '../../services/layout.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit, OnDestroy {

  //Variable Declaration
  public showLoader: boolean = true;
  public smallLeftBar: boolean = false;
  public smallLeftBarClass: string = "";
  private ngUnsubscribe = new Subject();
  todayDate: any = "";
  userShortName: string = "";
  userDisplayName: string = ""

  constructor(private layoutService: LayoutService, private router: Router) {
    this.router.events.pipe(takeUntil(this.ngUnsubscribe)).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showLoader = false;
      }
    });

    this.layoutService.smallLeftBarShow.pipe(takeUntil(this.ngUnsubscribe)).subscribe(leftBarStatus => {
      this.smallLeftBar = leftBarStatus;

      if (this.smallLeftBar) {
        this.smallLeftBarClass = "ls-toggle-menu";
      } else {
        this.smallLeftBarClass = "";
      }
    });
  }

  ngOnInit() {
    this.todayDate = new Date();
    // if (!localStorage.getItem("jwtToken")) {
    //   this.router.navigate(['login']);
    // }
    // this.getUserInfo();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  getUserInfo() {
    let username = localStorage.getItem('username');
    this.layoutService.getUserInfo(username).subscribe(
      data => {
        let userContext = JSON.stringify(data);
        localStorage.setItem('userContext', userContext);
        localStorage.setItem('userDisplayName', data.name);
        this.userShortName = data.name.match(/\b(\w)/g).join('');
        this.userDisplayName = data.name;
      },
      err => { }
    )
  }

  Logout() {
    this.layoutService.logout().subscribe(
      
      data=>{
      },
      err =>{
        localStorage.removeItem("jwtToken");
        localStorage.removeItem("username");
        localStorage.removeItem("userContext");
        this.router.navigate(['/login']);
      }
    )
  }


}
