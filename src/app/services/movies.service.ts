import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  apiKey: string = "3efe58175903c431f91fd13bff03e942"
  constructor(private http: HttpClient) {}

getPopularMovies(){
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}`;
  return this.http.get(url)
  .pipe(
    catchError((error) => {
      console.error('HTTP error:', error);
      return throwError('Something went wrong while fetching data.');
    })
  );
}
  getMovieDetails(id : number){
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}`)
  }
  getRecommendDetails(movie_id: number){
    return this.http.get(`https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=${this.apiKey}`)
  }
}