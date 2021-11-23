import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "src/app/models/user";
import { ApiService } from "../api.service";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private apiService: ApiService) {}
  getUsers(): Observable<User[]> {
    return this.apiService.get("users");
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
