import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { Product } from './../../models/product.model';

// import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient
  ) { }


    getNowPlaying(){
        return this.http.get<any>(`https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20`);
    }

    getUpcoming(){
        return this.http.get<any>(`https://api.themoviedb.org/3/movie/upcoming?api_key=6f26fd536dd6192ec8a57e94141f8b20`);
    }


    getPopular(){
        return this.http.get<any>(`https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20`);
    }

}
