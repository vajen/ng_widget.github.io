import {Component, Input} from '@angular/core';
import {IHotels, IWeather} from "../common/mock/data";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent {

  @Input()
  public hotel:IHotels;

  @Input()
  public weather: IWeather;

  @Input()
  public activeHotel: IHotels;

}
