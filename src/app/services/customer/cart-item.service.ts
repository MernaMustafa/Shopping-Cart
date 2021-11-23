import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CartItem } from "src/app/models/cart-item";
import { OrderItem } from "src/app/models/order-item";
import { UpdateModel } from "src/app/models/update-model";
import { ApiService } from "../api.service";

@Injectable({
  providedIn: "root",
})
export class CartItemService {
  constructor(private apiService: ApiService) {}
  addCartItem(OrderItem: OrderItem): Observable<CartItem> {
    return this.apiService.create("cartitems", OrderItem);
  }

  getCartItems(userId): Observable<CartItem[]> {
    return this.apiService.get("cartitems" + "/" + userId);
  }

  updateQuantity(updateModel: UpdateModel): Observable<string> {
    return this.apiService.create("cartitems/update", updateModel);
  }
}
