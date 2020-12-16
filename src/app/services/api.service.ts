import { Injectable } from '@angular/core';
import {  HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  result = {};

  constructor(private http: HttpClient) {}

  search(q: string) {
    return this.http.get('http://localhost:3000/groups');
  }
}


