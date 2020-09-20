import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from './auth.model';
import { CoreService } from '../shared/services/coreService';
import { ResponseObjectModel } from '../shared/DTO/ResponseObjectModel';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _coreService: CoreService) { }

  login(model: LoginModel): Observable<any> {
    return this._coreService.post("/authenticate", model);
  }

}
