import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VueloService {
  apiUri = '/api/vuelo';
  constructor(private http: HttpClient) { }

  getAllVueloData(token: any): Observable<any> {

    return this.http.get(this.apiUri, {
      headers:
      {
        'Content-Type': 'application/json',
        accessToken: `${token}`
      }
    });
  }

  newVuelo(idVuelo: any, data: any): Observable<any> {
    return this.http.post<any>(
      this.apiUri,
      {idVuelo: idVuelo,
      pasaporte: data.pasaporte,
      documento: data.documento,
      nombre: data.nombre,
      fechaNac: data.fechaNac},
      {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  }

  updateVuelo(token: any, id: any, data: any): Observable<any> {
    return this.http.put<any>(
      this.apiUri + '/' + id,
      data,
      { headers: {
        'Content-Type': 'application/json',
        accessToken: `${token}`
      } });
  }

  getOneVuelo(token: any, id: any): Observable<any> {
    return this.http.get<any>(
      this.apiUri + '/' + id,
      { headers: {
        'Content-Type': 'application/json',
        accessToken: `${token}`
      } });
  }

}
