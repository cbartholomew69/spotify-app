import { Component } from '@angular/core';
import { SpotifyService } from './services/spotify.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  // styleUrls: ['./app.component.css'],
  providers: [SpotifyService]
})
export class AppComponent {
  title = 'ngSpotify';
}
