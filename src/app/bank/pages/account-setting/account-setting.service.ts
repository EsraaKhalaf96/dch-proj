import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoreService } from 'src/app/shared/services/coreService';
import { UpdateUserModel, ChangePassModel } from './account-setting.model'

@Injectable({
  providedIn: 'root'
})
export class AccountSettingService {

  constructor(private _coreService: CoreService) { }

  updateUserInfo(model: UpdateUserModel): Observable<any> {
    return this._coreService.post("/users/update", model);
  }

  updateUserDisplayName(name): Observable<any> {
    return this._coreService.post("/users/changeName", name);
  }

  updateUserPassword(model: ChangePassModel): Observable<any> {
    return this._coreService.post("/users/changePassword", model);
  }

  getPasswordPolicies(): Observable<any> {
    return this._coreService.get("/getPasswordPolicy/1");
  }

}
