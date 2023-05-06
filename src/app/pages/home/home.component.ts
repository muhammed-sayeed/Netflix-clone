import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bannerResult: any = [];
  trendingMovieResult: any = [];
  actionMovieResult: any = [];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  documentryMovieResult: any = [];
  sciencefictionMovieResult: any = [];
  thrillerMovieResult: any = [];

  constructor(private service: MovieApiServiceService) { }

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovies();
    this.animationMovies();
    this.adventureMovies();
    this.comedyMovies();
    this.documentryMovies();
    this.sciencefictionMovies();
    this.thrillerMovies();
  }

  //bannerdata
  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      console.log(result, 'bannerresult#');
      this.bannerResult = result.results;

    })
  }

  trendingData() {
    this.service.trendingMovieApiData().subscribe((result) => {
      console.log(result, 'trendingresult#');
      this.trendingMovieResult = result.results
    })
  }

  //action
  actionMovies() {
    this.service.fetchActionMovies().subscribe((result) => {
      this.actionMovieResult = result.results;
    })
  }

  //adventure
  adventureMovies() {
    this.service.fetchAdventureMovies().subscribe((result) => {
      this.adventureMovieResult = result.results;
    })
  }

  //animation
  animationMovies() {
    this.service.fetchAnimationMovies().subscribe((result) => {
      this.animationMovieResult = result.results;
    })
  }

  //comedy
  comedyMovies() {
    this.service.fetchComedyMovies().subscribe((result) => {
      this.comedyMovieResult = result.results;
    })
  }

  //documentry
  documentryMovies() {
    this.service.fetchDocumentryMovies().subscribe((result) => {
      this.documentryMovieResult = result.results;
    })
  }

  //science-fiction
  sciencefictionMovies() {
    this.service.fetchScienceFictionMovies().subscribe((result) => {
      this.sciencefictionMovieResult = result.results;
    })
  }

  //thriller
  thrillerMovies() {
    this.service.fetchThrillerMovies().subscribe((result) => {
      this.thrillerMovieResult = result.results;
    })
  }
}
