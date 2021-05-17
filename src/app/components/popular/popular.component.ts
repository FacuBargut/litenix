import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../services/movie/movie.services'

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  constructor( private movieService:MoviesService) { }

  popularMovies: any[] = [];


  ngOnInit(): void {
    this.getPopularMovies();    
  }

  getPopularMovies(){
    this.movieService.getPopular().subscribe(
      popularMovie => {
        this.popularMovies = popularMovie.results 
        console.log(this.popularMovies);
    })
  }

}
