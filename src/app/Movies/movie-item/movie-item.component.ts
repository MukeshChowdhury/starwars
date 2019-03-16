import { Component, OnInit,Input } from '@angular/core';
import { IMovie } from '../movie-list/Movie';
import { IUrl } from '../shared/url';
import { urls } from '../shared/movieUrl';
@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit 
{
  // movie:IMovie={title:"some name",episode_id:1,opening_crawl:"",director:"director1, director2",producer:"",release_date:"01-01-2019",characters:[],planets:[],starships:[],vehicles:[],species:[],created:"",edited:"",url:""};
  @Input() lmovie:IMovie;
  movieUrl:IUrl[] = urls;
  height:number=200;
  width:number=200;
  movie:IUrl;
  value:string;
  
  
  constructor() { }

  ngOnInit() 
  {
    console.log(`Inside Item`);
    console.log(`${this.movieUrl} checking movieUrl from NgOnit`);
  }
  
  getImageUrl(id:number):string{
    console.log(`ID=${id}`);
    this.movie = this.movieUrl.filter(movie => movie.episode_id===id)?this.movieUrl.filter(movie => movie.episode_id===id)[0]:null;
    



    // this.value = this.movie['url'];
    // console.log(`String value = ${this.value} from getImageUrl`);
    // console.log(`${this.movie} from getImageUrl`);
    return this.movie .url||null ;
  }

}
