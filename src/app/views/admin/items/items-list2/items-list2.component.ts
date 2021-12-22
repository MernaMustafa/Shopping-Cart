import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Item } from "src/app/models/item";
import { LazyLoadEvent } from "primeng/api";
import { PaginationResponse } from "src/app/models/pagination-response";
import { ItemService } from "src/app/services/admin/item.service";

@Component({
  selector: "app-items-list2",
  templateUrl: "./items-list2.component.html",
  styleUrls: ["./items-list2.component.css"],
})
export class ItemsList2Component implements OnInit {
  constructor(private itemService: ItemService) {}
  title: string;
  loading: boolean = true;
  totalRecords: number;
  pageNumber: number = 1;
  numberOfRows: number = 3;
  paginatedItems: PaginationResponse<Item>;
  items: Item[] = [];
  ngOnInit() {
    this.title = "Manage Products";
    //this.getItems();
    this.loading = true;
  }

  getItems() {
    console.log("pageNo ===>" + this.pageNumber);
    this.itemService.getItems(this.pageNumber).subscribe((data) => {
      console.log("get response" + data);
      this.paginatedItems = data;
      this.items = data["list"];
      console.log(data["totalCount"]);
      console.log(data["totalPages"]);
      this.totalRecords = data["totalCount"];
      this.loading = false;
    });
  }

  deleteItem(evt, id) {
    evt.preventDefault();
    this.itemService.deleteItem(id).subscribe(() => {
      this.getItems();
    });
  }
  // getPage(pageNumber) {
  //   this.getItems(pageNumber);
  // }

  loadItems(event: LazyLoadEvent = null) {
    this.pageNumber = event.first / this.numberOfRows + 1;
    this.loading = true;
    console.log(event);
    this.getItems();
  }
}
