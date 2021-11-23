import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Cart } from "src/app/models/cart";
import { User } from "src/app/models/user";
import { UserService } from "src/app/services/admin/user.service";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  userId: number;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  type: string;
  cart: Cart;

  formData: FormGroup;
  user: User;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.formData = new FormGroup({
      userId: new FormControl(),
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      userName: new FormControl(),
      password: new FormControl(),
      confirmPassword: new FormControl(),
    });
  }

  onClickSubmit(data: any) {
    this.user = {
      UserId: Number(data.userId),
      FirstName: data.firstName,
      LastName: data.lastName,
      Email: data.email,
      UserName: data.userName,
      Password: data.password,
      ConfirmPassword: data.confirmPassword,
      Type: "customer",
      Cart: this.cart,
    };

    console.log("add fn fired");
    this.userService.addUser(this.user).subscribe(() => {
      console.log("user added");
      this.router.navigate(["/login"]);
    });
  }
}
