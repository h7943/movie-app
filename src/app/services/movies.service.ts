import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Movie } from '../interface/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  apiKey: string = "3efe58175903c431f91fd13bff03e942"
  constructor(private http: HttpClient) {}

getPopularMovies(page:number){
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&page=${page}`;
  return this.http.get(url)
}
  getMovieDetails(id : number){
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}`)
  }
  getRecommendDetails(movie_id: number){
    return this.http.get(`https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=${this.apiKey}`)
  }
  getSearch(movieName:string){
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${movieName}`)
  }
}