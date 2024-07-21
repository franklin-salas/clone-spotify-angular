import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { FavoriteService } from '@modules/favorites/services/favorite.service';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.css']
})
export class FavoritePageComponent implements OnInit {
  tracksFavorite: Array<TrackModel> = []
  

  constructor(private favoriteService: FavoriteService) { 
   
  }

  ngOnInit(): void {
 
    this.loadDataAll();


  }

  async loadDataAll(): Promise<any> {
    this.tracksFavorite = await this.favoriteService.getAllTracks$().toPromise();

  }
}
