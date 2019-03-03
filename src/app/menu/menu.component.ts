import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent {
  @Input()
  public type: string;

  @Output()
  public search = new EventEmitter();

  public searchBy(type): void {
    this.search.emit(type);
  }

}
