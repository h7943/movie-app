import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) {}

getPopularMovies() {
  const url = 'https://api.themoviedb.org/3/movie/popular?api_key=3efe58175903c431f91fd13bff03e942';

  return this.http.get(url).pipe(
    catchError((error) => {
      console.error('HTTP error:', error);
      return throwError('Something went wrong while fetching data.');
    })
  );
}

  getGameDetails(id : string | undefined){
    return this.http.get(`https://api.noroff.dev/api/v1/gamehub/${id}`)
  }

}