import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { CartItem } from "src/app/models/cart-item";
import { PaginationResponse } from "src/app/models/pagination-response";
import { CartItemService } from "src/app/services/customer/cart-item.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
  @Input() pageNumber: number = 1;
  @Output() filteredCartItems = new EventEmitter<{
    list: PaginationResponse<CartItem>;
    search: string;
  }>();
  constructor(
    private cartItemService: CartItemService,
    private router: Router
  ) {}

  ngOnInit() {}

  searchByName(pageNumber, searchString) {
    if (searchString) {
      console.log(searchString);
      this.cartItemService
        .getCartItems(
          sessionStorage.getItem("userId"),
          pageNumber,
          searchString
        )
        .subscribe((data) => {
          this.filteredCartItems.emit({ list: data, search: searchString });
        });
    }
  }
}
