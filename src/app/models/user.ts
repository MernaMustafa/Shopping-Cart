import { Cart } from "./cart";
export interface User {
  UserId: number;
  FirstName: string;
  LastName: string;
  Email: string;
  UserName: string;
  Password: string;
  ConfirmPassword: string;
  Type: string;
  Cart: Cart;
}
