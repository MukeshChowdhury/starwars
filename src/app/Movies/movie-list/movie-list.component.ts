import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/MovieService';
import { Observable } from 'rxjs';
import { IMovie } from './Movie';
import * as $ from 'jquery';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  
  movies:Observable<IMovie[]>;
  movieUrl:string='https://i0.wp.com/rpad.tv/wp-content/uploads/2016/12/Star-Wars-A-New-Hope-4K.jpg?fit=800%2C467';
  height:number=200;
  width:number=200;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getMovies().subscribe(
      data=> {
        this.movies = data['results'];

        console.log(`${this.movies} from component`)
      }
    )
    
  }
  

}
