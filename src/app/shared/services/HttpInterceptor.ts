import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { Router } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable()
export class HttpInterceptorHandler implements HttpInterceptor {

    constructor(private router: Router, public _msgs: MessagesHelper, public loaderService: LoaderService,) { }
   
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let reqUrl = 'http://localhost:8082' + request.url;
        if (localStorage.getItem('jwtToken')) {
            request = request.clone({
                url: reqUrl,
                setHeaders: {
                    Authorization: `Bearer ` + localStorage.getItem('jwtToken'),
                },
            });
        } else {
            request = request.clone({
                url: reqUrl,
            });
        }
        return next.handle(request);
    }
}


import { ErrorHandler } from '@angular/core';
import { MessagesHelper } from '../Helper/MessagesService';
import { MessagesTypeEnum } from '../enum/MessagesTypeEnum';
import { LoaderService } from '../loader/loader.service';
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    handleError(error: any): void {
        const chunkFailedMessage = /Loading chunk [\d]+ failed/;
        if (chunkFailedMessage.test(error.message)) {
            window.location.reload();
        }
    }
}