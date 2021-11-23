import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Authenticate } from "src/app/models/authenticate";
import { UserInfo } from "src/app/models/user-info";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  formData: FormGroup;
  authenticateModel: Authenticate;
  invalidLogin: boolean;
  userInfo: UserInfo;
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit() {
    this.formData = new FormGroup({
      userName: new FormControl(),
      password: new FormControl(),
    });
  }

  onClickSubmit(data: any) {
    console.log("onClickSubmit fired");
    this.authenticateModel = {
      UserName: data.userName,
      Password: data.password,
    };

    this.authService.login(this.authenticateModel).subscribe(
      (response: UserInfo) => {
        sessionStorage.setItem("jwt", response["token"]);
        sessionStorage.setItem("userId", response["userId"]);
        sessionStorage.setItem("role", response["role"]);
        this.invalidLogin = false;
        if (response["role"] == "admin") {
          this.router.navigate(["/item"]);
        } else {
          this.router.navigate(["/cart/add"]);
        }
      },
      (err) => {
        this.invalidLogin = true;
      }
    );
  }
}
