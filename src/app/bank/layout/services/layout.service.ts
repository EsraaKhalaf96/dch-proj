import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { CoreService } from 'src/app/shared/services/coreService';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  public smallLeftBar: boolean = false;
  // public currentTheme: string = "theme-blush";

  public smallLeftBarShow: Subject<boolean> = new Subject<boolean>();


  constructor(private _coreService: CoreService) {
    // Left bar subscribers
    this.smallLeftBarShow.subscribe((value) => {
      this.smallLeftBar = value;
    });
  }

  /**
   * Left Bar Size Toggle Function
   */
  toggleLeftBar() {
    if (this.smallLeftBar) {
      this.smallLeftBarShow.next(false);
    } else {
      this.smallLeftBarShow.next(true);
    }
  }

  getUserInfo(username): Observable<any> {
    return this._coreService.get("/users/read/" + username);
  }

  logout(): Observable<any> {
    return this._coreService.get("/log_out");
  }

}
