import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
 
export class MovieService {  
    static get parameters() {
        return [[Http]];
    }
 
	constructor(private http:Http) {
		
	}
 
    searchMovies(movieName) {
        var url = 'http://api.themoviedb.org/3/search/movie?query=&query=' + encodeURI(movieName) + '&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
        var response = this.http.get(url).map(res => res.json());
		return response;
    }
    
    searchWiki() {
        var gscoord='37.786952|-122.399523'
//        var gscoord='38.8958120|-77.0759770' # Key blvd
        var gsradius=1000
        var gslimit=10
        var url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=geosearch&gscoord='+ encodeURI(gscoord) +'&gsradius=' + gsradius + '&gslimit='+ gslimit
        var response = this.http.get(url).map(res => res.json());
        return response;
    }
}