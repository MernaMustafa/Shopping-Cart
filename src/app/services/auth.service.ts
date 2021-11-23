import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Authenticate } from "../models/authenticate";
import { UserInfo } from "../models/user-info";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private apiService: ApiService) {}

  login(authenticate: Authenticate): Observable<UserInfo> {
    console.log("auth. fired");
    return this.apiService.create("auth", authenticate);
  }

  logout(): void {
    sessionStorage.clear();
  }
}
