import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { CartItem } from "src/app/models/cart-item";
import { PaginationResponse } from "src/app/models/pagination-response";
import { UpdateModel } from "src/app/models/update-model";
import { CartItemService } from "src/app/services/customer/cart-item.service";
import { SearchComponent } from "../search/search.component";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  title: string;
  cartItems: PaginationResponse<CartItem>;
  pageNumber: number = 1;
  searchString: string = null;
  updateModel: UpdateModel;
  constructor(
    private cartItemService: CartItemService,
    private router: Router
  ) {}

  ngOnInit() {
    this.title = "My Cart";
    this.getCartItems();
  }
  getCartItems() {
    this.cartItemService
      .getCartItems(
        sessionStorage.getItem("userId"),
        this.pageNumber,
        this.searchString
      )
      .subscribe((data) => {
        this.cartItems = data;
      });
  }

  updateQuantity(cartItemId, quantity) {
    this.updateModel = {
      CartItemId: cartItemId,
      Quantity: quantity,
    };
    this.cartItemService.updateQuantity(this.updateModel).subscribe((res) => {
      console.log(res, quantity);
      if (res["success"] == "deleted") {
        this.getCartItems();
      }
    });
  }

  filter($event) {
    this.cartItems = $event["list"];
    this.searchString = $event["search"];
  }

  getPage(pageNumber) {
    this.pageNumber = pageNumber;
    this.getCartItems();
  }
}
