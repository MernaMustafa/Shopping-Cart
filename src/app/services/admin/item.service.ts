import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Item } from "src/app/models/item";
import { PaginationResponse } from "src/app/models/pagination-response";
import { ApiService } from "../api.service";

@Injectable({
  providedIn: "root",
})
export class ItemService {
  constructor(private apiService: ApiService) {}
  getItems(pageNumber): Observable<PaginationResponse<Item>> {
    return this.apiService.get("items" + "/page/" + pageNumber);
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
