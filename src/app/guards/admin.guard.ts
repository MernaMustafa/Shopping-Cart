import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AdminGuard implements CanActivate {
  canActivate() {
    const role = sessionStorage.getItem("role");
    if (role == "admin") {
      return true;
    }
    return false;
  }
}
