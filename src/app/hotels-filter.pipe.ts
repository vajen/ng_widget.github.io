import { Pipe, PipeTransform } from '@angular/core';
import {IHotels} from "./common/mock/data";

@Pipe({
  name: 'hotelsFilter'
})
export class HotelsFilterPipe implements PipeTransform {

  public transform(hotels: IHotels[], searchtext: string): IHotels[] {
    if(!searchtext){
      return hotels;
    }
    return hotels.filter((hotel: IHotels) => {
      return hotel.type.toLowerCase().includes(searchtext.toLowerCase());
    })
  }

}
