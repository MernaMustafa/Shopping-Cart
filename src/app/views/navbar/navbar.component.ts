import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  userId: number;
  role: string;
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit() {
    this.userId = Number(sessionStorage.getItem("userId"));
    this.role = sessionStorage.getItem("role");
    this.router.events.subscribe((event) => {
      if (event.constructor.name === "NavigationEnd") {
        this.userId = Number(sessionStorage.getItem("userId"));
        this.role = sessionStorage.getItem("role");
      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(["/home"]);
  }
}
