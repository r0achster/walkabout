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
    coordinates = "";

	constructor(public navCtrl: NavController, private movieService: MovieService, public locationTracker: LocationTracker) {

	}
	ionViewDidEnter(){
	    
	    
	    this.start();    
	    console.log("cem");
//	    this.searchMovieDB();
	
	}
	
  
	start(){
	     this.locationTracker.startTracking();
//	     .success(function () {
	         this.searchMovieDB();
//	       });
	     
//	         //success handler function
//	         this.searchMovieDB();
//	     },function(error){
//	   //error handler function    
//	         console.log("I HAD an ERROR")
//	   });
	             
	             
//	             this.searchMovieDB());

	     
	    
	}
	 
	stop(){
	    this.locationTracker.stopTracking();
	}	
	
	
	
	searchMovieDB() {
//		console.log(event.target.value);
//		if(event.target.value.length > 2) {
		    
//	          this.movieService.searchWiki(event.target.value).subscribe(
	    console.log(this.locationTracker);
//	    while (this.locationTracker.lng == 0){
//	        setTimeout('', 5000);
//	        console.log("waiting for geodata")
//	     
//	    }
	    
	    var gscoord=this.locationTracker.lat+'|'+ this.locationTracker.lng;
	    console.log("These are my coordinates:" + gscoord)
	    
	    
		this.movieService.searchWiki(gscoord).subscribe(
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
//		}
	}   
	
	
	
	
	
	
	
	
	itemTapped(event, movie) {
		this.navCtrl.push(MovieInfoPage, {
			movie: movie
		});
	}
}
