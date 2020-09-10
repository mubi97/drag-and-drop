
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ListInfo } from '../models/listinfo';

const baseUrl = 'http://localhost:8000'
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': baseUrl
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrlApi = baseUrl + '/api';
  constructor(
    private http: HttpClient
    ) {}

  public addEntry(data: ListInfo): Observable<string> {

    return this.http.post<string>(`${this.baseUrlApi}/addEntry`, data, httpOptions);
  }
  public changeList(data: ListInfo): Observable<string> {

    return this.http.post<string>(`${this.baseUrlApi}/changeList`, data, httpOptions);
  }
  public loadData(): Observable<string> {
    return this.http.get<string>(`${this.baseUrlApi}/loadData`, httpOptions);
  }
}
