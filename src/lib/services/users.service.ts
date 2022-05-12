import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  searchTrack({ q }: TrackModel): Observable<any> {
    return this.httpClient.get(`${environment.url}?q=${q}`);
  }
}

export class TrackModel {
  q!: string;
}
