import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseUrl = environment.baseUrl;
  apiKey = environment.apiKey;

  constructor(private http: HttpClient) { }

  getTopRatedMovies() {
    return this.http.get(`${this.baseUrl}/top_rated?api_key=${this.apiKey}&page=1`);
  }
}
