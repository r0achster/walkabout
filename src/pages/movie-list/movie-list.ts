import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieService } from '../service/movie-service';
import { MovieInfoPage } from '../movie-info/movie-info';
import { LocationTracker } from '../../providers/location-tracker';


@Component({
  selector: 'page-movie-list',
  templateUrl: 'movie-list.html',
  providers: [MovieService]
})
export class MovieListPage {

	movies: Array<any>;

	constructor(public navCtrl: NavController, private movieService: MovieService, public locationTracker: LocationTracker) {

	}
  
	start(){
	    this.locationTracker.startTracking();
	}
	 
	stop(){
	    this.locationTracker.stopTracking();
	}	
	
	
	
	searchMovieDB(event, key) {
		console.log(event.target.value);
		if(event.target.value.length > 2) {
		    
//	          this.movieService.searchWiki(event.target.value).subscribe(
			this.movieService.searchWiki().subscribe(
				data => {
				    
			        console.log(data)
					this.movies = data.query.geosearch; 
					console.log(this.movies);
				},
				err => {
					console.log(err);
				},
				() => console.log('Wiki Search Complete')
			);
		}
	}   
	
	
	
	
	
	
	
	
	itemTapped(event, movie) {
		this.navCtrl.push(MovieInfoPage, {
			movie: movie
		});
	}
}
