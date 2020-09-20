import { Observable, BehaviorSubject, Subject, throwError, Subscriber } from 'rxjs';
import {
    HttpClient,
    HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseObjectModel } from '../DTO/ResponseObjectModel';


@Injectable({
    providedIn: 'root',
})
export class CoreService {
    readonly serverUrl: string = "";
    private httpOptions = {
        headers: new HttpHeaders({
            // 'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            // 'Authorization': 'Bearer 1eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNDk4ODVhZDJiYmE3Mjk5Y2FhMTg0MyIsInR5cGUiOiJ1c2VyIiwiaWF0IjoxNTUyNTg2MzgzfQ._Yj7bJutqMobziE2tn4rLVJ032OUaWr93Bls3wq6mKo'
        })
    };
    constructor(private http: HttpClient) { }

    post(url: string, model: any): Observable<ResponseObjectModel> {
        return this.http.post<ResponseObjectModel>(url, model, this.httpOptions);
    }

    put(url: string, model: any): Observable<ResponseObjectModel> {
        return this.http.put<ResponseObjectModel>(url, model, this.httpOptions);
    }

    get(url: string, queryParam?: string): Observable<any> {
        if (queryParam) {
            url = url + "?" + queryParam;
            return this.http.get<any>(url, this.httpOptions);
        }
        else {
            return this.http.get<any>(url, this.httpOptions);
        }

    }

    delete(url: string): Observable<ResponseObjectModel> {
        return this.http.delete<ResponseObjectModel>(url, this.httpOptions);
    }

    postFile(fileToUpload: File): Observable<ResponseObjectModel> {
        const endpoint = '/file';
        const formData: FormData = new FormData();
        let headers = new HttpHeaders();
        headers.set('Content-Type', 'multipart/form-data');
        formData.append('file', fileToUpload, fileToUpload.name);
        let modelToSave = {
            'file': fileToUpload
        };
        return this.http
            .post<ResponseObjectModel>(endpoint, formData, { headers });
    }

}