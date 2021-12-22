import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Item } from "src/app/models/item";
import { PaginationResponse } from "src/app/models/pagination-response";
import { ItemService } from "src/app/services/admin/item.service";

@Component({
  selector: "app-items-list",
  templateUrl: "./items-list.component.html",
  styleUrls: ["./items-list.component.css"],
})
export class ItemsListComponent implements OnInit {
  constructor(private itemService: ItemService) {}
  title: string;
  items: PaginationResponse<Item>;
  ngOnInit() {
    this.title = "Manage Products";
    this.getItems();
  }

  getItems(pageNumber = 1) {
    this.itemService.getItems(pageNumber).subscribe((data) => {
      console.log("get response" + data);
      this.items = data;
    });
  }

  deleteItem(evt, id, pageNumber) {
    evt.preventDefault();
    this.itemService.deleteItem(id).subscribe(() => {
      this.getItems(pageNumber);
    });
  }
  getPage(pageNumber) {
    this.getItems(pageNumber);
  }
}
