import { CartItem } from "./cart-item";
import { User } from "./user";

export interface Cart {
  CartId: number;
  User: User;
  UserId: number;
  CartItems: CartItem[];
}
