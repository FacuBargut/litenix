import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SideMenuComponent } from '../components/side-menu/side-menu.component'

import { AltaPeliculaComponent } from './modal/alta-pelicula.component'
import {MatDialog} from '@angular/material/dialog';

import { MoviesService } from '../services/movie/movie.services'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  @ViewChild(SideMenuComponent) sidenav: SideMenuComponent;

  openSidebar: boolean = true;

  upcomingMovies: any[] = [];

  constructor( private movieService: MoviesService,
               public dialog: MatDialog) { 
    
  }
  ngOnInit(): void {
    this.getUpcomingMovies();
  }

  reason = '';

  ngAfterViewInit() {
    
  }

  sidenavToggle(){
    this.sidenav.toggleSidebar(this.openSidebar);
    let headerNavbar = document.getElementById('header-navbar')
    let containerBars = document.getElementById('container-bars');
    if(this.openSidebar){
      headerNavbar?.classList.add('align-elements-left')
      containerBars?.classList.add('container-bars-margin');
      containerBars?.classList.add('change');
    }else{
      headerNavbar?.classList.remove('align-elements-left')
      containerBars?.classList.remove('container-bars-margin');
      containerBars?.classList.remove('change');
    }
    this.openSidebar = !this.openSidebar;
  }


  getUpcomingMovies(){
    this.movieService.getUpcoming().subscribe(
      upcomingMovie =>{
        this.upcomingMovies = upcomingMovie.results
        console.log(this.upcomingMovies)
      }
    )
  }

  openDialog(){
    const dialogRef = this.dialog.open(AltaPeliculaComponent,{
      height: '354px',
      width: '730px',
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }

}
