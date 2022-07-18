import { Injectable } from '@angular/core';
import { Employee } from '../model/emploee.model';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
// import { of } from 'rxjs';

import { Observable, of, throwError } from 'rxjs';

@Injectable()
export class EmployeeService {
  _employees!: Employee[];
  url = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url);
  }
}
