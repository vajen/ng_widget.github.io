import {
  Component,
  EventEmitter,
  Input,
  Output
} from "@angular/core";
import { IHotels } from "../common/mock/data";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"]
})
export class ItemComponent {
  @Input()
  public hotels: IHotels[];

  public type = '';
  public hotel: IHotels;
  public currentHotel: IHotels;

  @Output()
  public change = new EventEmitter<IHotels>();

  public selectHotel(hotel: IHotels): void {
    this.currentHotel = hotel;
    this.change.emit(hotel);
  }

}
