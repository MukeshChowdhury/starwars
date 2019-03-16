import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,throwError} from 'rxjs';
import { IMovie } from './Movies/movie-list/Movie';
import { map,tap } from 'rxjs/operators';
@Injectable({
    providedIn:'root'
})
export class MovieService{
    private url:string='https://swapi.co/api/films/';

    constructor(private http: HttpClient){}

    getMovies():Observable<IMovie[]>{
        return this.http.get<IMovie[]>(this.url).pipe(
            tap(data=> console.log('Data from service'+ JSON.stringify(data)))
        );
    }
}