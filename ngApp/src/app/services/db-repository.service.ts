import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbRepositoryService {

  readonly baseURL = 'http://localhost:5000/api/';
  controller: string;
  action: string;
  param: string;
  constructor(private http: HttpClient) { }

  getData(): Observable<[]>{
    this.controller = 'excelData';
    this.action = 'allData';
    return this.http.get<[]>(this.baseURL + `${this.controller}` + `/` + `${this.action}`);
  }
}
