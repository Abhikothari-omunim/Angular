import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiUrl = 'http://your-laravel-api-url/api/students'; // Update with your actual API URL

  constructor(private http: HttpClient) { }

  addStudent(studentData: any): Observable<any> {
    return this.http.post(this.apiUrl, studentData);
  }}
