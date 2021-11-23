import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Item } from "src/app/models/item";
import { ItemService } from "src/app/services/admin/item.service";

@Component({
  selector: "app-items-list",
  templateUrl: "./items-list.component.html",
  styleUrls: ["./items-list.component.css"],
})
export class ItemsListComponent implements OnInit {
  constructor(private itemService: ItemService) {}
  title: string;
  items: Item[];
  ngOnInit() {
    this.title = "Manage Products";
    this.getItems();
  }

  getItems() {
    this.itemService.getItems().subscribe((data) => {
      console.log("get response" + data);
      this.items = data;
    });
  }

  deleteItem(evt, id) {
    evt.preventDefault();
    this.itemService.deleteItem(id).subscribe(() => {
      this.getItems();
    });
  }
}
