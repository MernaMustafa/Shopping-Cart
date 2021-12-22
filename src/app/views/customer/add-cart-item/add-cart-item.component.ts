import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { CartItem } from "src/app/models/cart-item";
import { Item } from "src/app/models/item";
import { OrderItem } from "src/app/models/order-item";
import { PaginationResponse } from "src/app/models/pagination-response";
import { ItemService } from "src/app/services/admin/item.service";
import { CartItemService } from "src/app/services/customer/cart-item.service";

@Component({
  selector: "app-add-cart-item",
  templateUrl: "./add-cart-item.component.html",
  styleUrls: ["./add-cart-item.component.css"],
})
export class AddCartItemComponent implements OnInit {
  title: string;
  items: PaginationResponse<Item>;
  cartItem: CartItem;
  orderItem: OrderItem;
  constructor(
    private itemService: ItemService,
    private cartItemService: CartItemService,
    private router: Router
  ) {}

  ngOnInit() {
    this.title = "Add Items To Your Cart";
    this.getItems();
  }

  addCartItem(itemId: any) {
    console.log("addCartItem fired");
    this.orderItem = {
      UserId: Number(sessionStorage.getItem("userId")),
      ItemId: Number(itemId),
    };

    this.cartItemService.addCartItem(this.orderItem).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate([
          "/cart" + "/" + sessionStorage.getItem("userId"),
        ]);
      },
      (err) => console.log(err)
    );
  }

  getItems(pageNumber = 1) {
    this.itemService.getItems(pageNumber).subscribe((data) => {
      this.items = data;
    });
  }

  getPage(pageNumber) {
    this.getItems(pageNumber);
  }
}
