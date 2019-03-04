import { Pipe, PipeTransform } from '@angular/core';
import {IHotels} from "./common/mock/data";

@Pipe({
  name: 'uniqType'
})
export class UniqTypePipe implements PipeTransform {
  public _uniqTypes: string[];

    transform(hotels: IHotels[]): string[] {
      const types = hotels.map((hotel)=>{
        return hotel.type;
      });
      return Array.from(new Set(types));
    }
}
