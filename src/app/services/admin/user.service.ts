import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PaginationResponse } from "src/app/models/pagination-response";
import { User } from "src/app/models/user";
import { ApiService } from "../api.service";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private apiService: ApiService) {}
  getUsers(pageNumber): Observable<PaginationResponse<User>> {
    return this.apiService.get("users" + "/" + pageNumber);
  }

  deleteUser(id): Observable<User> {
    return this.apiService.delete("users/" + id);
  }

  getUserById(id): Observable<User> {
    return this.apiService.get("users/" + id);
  }

  addUser(User): Observable<User> {
    return this.apiService.create("users", User);
  }
}
