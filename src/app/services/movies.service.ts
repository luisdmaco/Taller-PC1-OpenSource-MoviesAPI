import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseUrl = 'https://api.themoviedb.org/3/movie';

  apiKey = 'c450957bf05956fb9429ec0f277bccf5';

  constructor(private http: HttpClient) { }

  getTopRatedMovies() {
    return this.http.get(`${this.baseUrl}/top_rated?api_key=${this.apiKey}&page=1`);
  }
}
