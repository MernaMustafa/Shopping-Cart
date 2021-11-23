import { Cart } from "./cart";
import { Item } from "./item";

export interface CartItem {
  Id: number;
  ItemId: number;
  Item: Item;
  Quantity: number;
  CartId: number;
  Cart: Cart;
}
