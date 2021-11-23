import { Pipe, PipeTransform } from "@angular/core";
import { CartItem } from "../models/cart-item";

@Pipe({
  name: "filterByPrice",
})
export class FilterByPricePipe implements PipeTransform {
  transform(items: CartItem[], option: string): CartItem[] {
    if (!items) {
      return [];
    }
    if (!option || option == "All prices") {
      return items;
    }
    if (option == "Under 500") {
      return items.filter((it) => {
        return it["item"].price < 500;
      });
    } else {
      return items.filter((it) => {
        return it["item"].price >= 500;
      });
    }
  }
}
