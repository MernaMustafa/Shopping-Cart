import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Cart } from "src/app/models/cart";
import { User } from "src/app/models/user";
import { UserService } from "src/app/services/admin/user.service";

@Component({
  selector: "app-add-edit-user",
  templateUrl: "./add-edit-user.component.html",
  styleUrls: ["./add-edit-user.component.css"],
})
export class AddEditUserComponent implements OnInit {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  password: string;
  confirmPassword: string;
  type: string;
  cart: Cart;

  formData: FormGroup;
  selectedId: number;
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
      type: new FormControl(),
    });
    this.selectedId = Number(this.route.snapshot.paramMap.get("id"));
    console.log(this.selectedId);

    if (this.selectedId != null && this.selectedId != 0) {
      console.log("this is edit action");
      this.userService.getUserById(this.selectedId).subscribe((data) => {
        this.user = data;
        console.log(this.user);
        this.formData.controls["userId"].setValue(this.user["userId"]);
        this.formData.controls["firstName"].setValue(this.user["firstName"]);
        this.formData.controls["lastName"].setValue(this.user["lastName"]);
        this.formData.controls["email"].setValue(this.user["email"]);
        this.formData.controls["password"].setValue(this.user["password"]);
        this.formData.controls["confirmPassword"].setValue(
          this.user["confirmPassword"]
        );
        this.formData.controls["type"].setValue(this.user["type"]);
      });
    }
  }

  onClickSubmit(data: any) {
    console.log("onClickSubmit fired");
    this.user = {
      UserId: Number(data.userId),
      FirstName: data.firstName,
      LastName: data.lastName,
      Email: data.email,
      UserName: data.userName,
      Password: data.password,
      ConfirmPassword: data.confirmPassword,
      Type: data.type,
      Cart: this.cart,
    };

    if (this.user.UserId == 0) {
      console.log("add fn fired");
      this.userService.addUser(this.user).subscribe((data) => {
        console.log(data);
        this.router.navigate(["/user"]);
      });
    }
  }
}
