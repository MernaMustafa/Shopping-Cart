import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Item } from "src/app/models/item";
import { ApiService } from "../api.service";

@Injectable({
  providedIn: "root",
})
export class ItemService {
  constructor(private apiService: ApiService) {}
  getItems(): Observable<Item[]> {
    return this.apiService.get("items");
  }

  deleteItem(id): Observable<Item> {
    return this.apiService.delete("items/" + id);
  }

  getItemById(id): Observable<Item> {
    return this.apiService.get("items/" + id);
  }

  addItem(Item): Observable<Item> {
    return this.apiService.create("items", Item);
  }

  updateItem(Item): Observable<Item> {
    return this.apiService.update("items", Item);
  }
}
