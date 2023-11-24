import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TiqueteService {
  apiUri = '/api/tiquete';
  constructor(private http: HttpClient) { }

  getAllTiqueteData(token: any): Observable<any> {

    return this.http.get(this.apiUri, {
      headers:
      {
        'Content-Type': 'application/json',
        accessToken: `${token}`
      }
    });
  }

  newTiquete(token: any, data: any): Observable<any> {
    return this.http.post<any>(
      this.apiUri,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          accessToken: `${token}`
        }
      });
  }

  updateTiquete(token: any, id: any, data: any): Observable<any> {
    return this.http.put<any>(
      this.apiUri + '/' + id,
      data,
      { headers: {
        'Content-Type': 'application/json',
        accessToken: `${token}`
      } });
  }

  getOneTiquete(token: any, id: any): Observable<any> {
    return this.http.get<any>(
      this.apiUri + '/' + id,
      { headers: {
        'Content-Type': 'application/json',
        accessToken: `${token}`
      } });
  }

}
