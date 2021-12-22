import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CartItem } from "src/app/models/cart-item";
import { OrderItem } from "src/app/models/order-item";
import { UpdateModel } from "src/app/models/update-model";
import { ApiService } from "../api.service";
import { PaginationResponse } from "src/app/models/pagination-response";

@Injectable({
  providedIn: "root",
})
export class CartItemService {
  constructor(private apiService: ApiService) {}
  addCartItem(OrderItem: OrderItem): Observable<CartItem> {
    return this.apiService.create("cartitems", OrderItem);
  }

  getCartItems(
    userId,
    pageNumber,
    searchString
  ): Observable<PaginationResponse<CartItem>> {
    if (searchString == null) {
      return this.apiService.get("cartitems/" + userId + "/" + pageNumber);
    } else {
      return this.apiService.get(
        "cartitems/" + userId + "/" + pageNumber + "/" + searchString
      );
    }
  }

  // getFilteredCartItems(
  //   userId,
  //   searchString,
  //   pageNumber
  // ): Observable<PaginationResponse<CartItem>> {
  //   return this.apiService.get(
  //     "cartitems/search/" + userId + "/" + searchString + "/" + pageNumber
  //   );
  // }

  updateQuantity(updateModel: UpdateModel): Observable<string> {
    return this.apiService.create("cartitems/update", updateModel);
  }
}
