import { Injectable } from "@angular/core";
import { ApiService } from "../api.service";

@Injectable({
  providedIn: "root",
})
export class CartService {
  constructor(private apiService: ApiService) {}
}
