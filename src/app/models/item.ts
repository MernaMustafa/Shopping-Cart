import { CartItem } from "./cart-item";

export interface Item {
  ItemId: number;
  Name: string;
  Price: number;
  CartItems: CartItem[];
}
