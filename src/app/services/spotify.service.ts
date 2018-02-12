import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
    private searchUrl:string;
    // private client_id = '1a82664b1b6c4c98bfb5bc7004ec1ace';
    // private client_secret = '1fd613880adb49368e48b3f152196f0a';
    constructor(private _http:Http){
        console.log('Sportify Service Ready...');

    }

    searchMusic(str:string, type='artist'){
        this.searchUrl = 'https://api.spotify.com/v1/search?q='+str+'&offset=0&limit=20&type='+type+'&market=us';
        return this._http.get(this.searchUrl)
          .map(res => res.json());

    }
}