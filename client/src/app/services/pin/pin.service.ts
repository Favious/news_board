import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pin } from 'src/app/models/pin.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PinService {
  url: string;

  constructor(public httpClient: HttpClient) {
    this.url = `${environment.serverUrl}/pins`;
  }

  sendPin(pin: Pin): Observable<Pin> {
    return this.httpClient.post<Pin>(this.url, pin);
  }

  getPins(): Observable<Array<Pin>> {
    return this.httpClient.get<Array<Pin>>(this.url);
  }

  getPin(id: string): Observable<Pin> {
    return this.httpClient.get<Pin> (`${this.url}/${id}`);
  }

  updatePin(id: string, pin: Pin ): Observable<Pin> {
    return this.httpClient.put<Pin>(`${this.url}/${id}`, pin);
  }

  removePin(id: string ): Observable<Pin> {
    return this.httpClient.delete<Pin>(`${this.url}/${id}`);
  }
}
