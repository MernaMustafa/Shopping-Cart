import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CartItem } from "src/app/models/cart-item";
import { UpdateModel } from "src/app/models/update-model";
import { CartItemService } from "src/app/services/customer/cart-item.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  title: string;
  cartItems: CartItem[];
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
      .getCartItems(sessionStorage.getItem("userId"))
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
}
