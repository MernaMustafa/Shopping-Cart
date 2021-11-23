import { Pipe, PipeTransform } from "@angular/core";
import { CartItem } from "../models/cart-item";

@Pipe({
  name: "search",
})
export class SearchPipe implements PipeTransform {
  transform(items: CartItem[], searchText: string): CartItem[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter((it) => {
      return it["item"].name.toLocaleLowerCase().includes(searchText);
    });
  }
}
