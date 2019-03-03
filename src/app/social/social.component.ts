import {Component, Input} from '@angular/core';
import {IHotels, ISocial} from "../common/mock/data";

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent {

  @Input()
  public hotel: IHotels;

  @Input()
  public social: ISocial;

  @Input()
  public activeHotel: IHotels;

  constructor() {}


}
