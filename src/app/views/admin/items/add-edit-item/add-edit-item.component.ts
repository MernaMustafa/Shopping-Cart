import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CartItem } from "src/app/models/cart-item";
import { Item } from "src/app/models/item";
import { ItemService } from "src/app/services/admin/item.service";

@Component({
  selector: "app-add-edit-item",
  templateUrl: "./add-edit-item.component.html",
  styleUrls: ["./add-edit-item.component.css"],
})
export class AddEditItemComponent implements OnInit {
  id: number;
  name: string;
  price: number;
  cartItems: CartItem[];

  formData: FormGroup;
  selectedId: number;
  item: Item;

  constructor(
    private itemService: ItemService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.formData = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
    });
    this.selectedId = Number(this.route.snapshot.paramMap.get("id"));
    console.log(this.selectedId);

    if (this.selectedId != null && this.selectedId != 0) {
      console.log("this is edit action");
      this.itemService.getItemById(this.selectedId).subscribe((data) => {
        this.item = data;
        console.log(this.item);
        this.formData.controls["id"].setValue(this.item["itemId"]);
        this.formData.controls["name"].setValue(this.item["name"]);
        this.formData.controls["price"].setValue(this.item["price"]);
      });
    }
  }

  onClickSubmit(data: any) {
    console.log("onClickSubmit fired");
    this.item = {
      ItemId: Number(data.id),
      Name: data.name,
      Price: data.price,
      CartItems: this.cartItems,
    };

    if (this.item.ItemId == 0) {
      console.log("add fn fired");
      this.itemService.addItem(this.item).subscribe((data) => {
        console.log("Item is added");
        this.router.navigate(["/item"]);
      });
    } else {
      console.log("edit fn fired");
      this.itemService.updateItem(this.item).subscribe((data) => {
        console.log("Item is updated");
        this.router.navigate(["/item"]);
      });
    }
  }
}
