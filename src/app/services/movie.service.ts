import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../interfaces/Movie';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${environment.baseUrl}/movie`);
  }
  getMovie(id: string): Observable<Movie> {
    return this.http.get<Movie>(`${environment.baseUrl}/movie/${id}`);
  }
  createMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(`${environment.baseUrl}/movie/create`, movie);
  }
  updateMovie(id: string | undefined, movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(`${environment.baseUrl}/movie/${id}`, movie);
  }
  deleteMovie(id: string | undefined): Observable<Movie> {
    return this.http.delete<Movie>(`${environment.baseUrl}/movie/${id}`);
  }
}
