import { Component, Input} from '@angular/core';
import {data$, IHotels, ISocial, IWeather} from "./common/mock/data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public hotels$ = data$;

  public currentHotel: IHotels;
  public weather: IWeather;
  public social: ISocial;

  public onCardClick(hotel: IHotels){
    this.currentHotel = hotel;
  }
}
