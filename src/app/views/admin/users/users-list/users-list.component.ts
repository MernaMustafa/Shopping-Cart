import { Component, OnInit } from "@angular/core";
import { PaginationResponse } from "src/app/models/pagination-response";
import { User } from "src/app/models/user";
import { UserService } from "src/app/services/admin/user.service";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.css"],
})
export class UsersListComponent implements OnInit {
  constructor(private userService: UserService) {}
  title: string;
  users: PaginationResponse<User>;
  ngOnInit() {
    this.title = "Manage Users";
    this.getUsers();
  }

  getUsers(pageNumber = 1) {
    this.userService.getUsers(pageNumber).subscribe((data) => {
      console.log(data["totalCount"]);
      console.log(data["totalPages"]);
      this.users = data;
    });
  }

  deleteUser(evt, id, pageNumber) {
    evt.preventDefault();
    this.userService.deleteUser(id).subscribe(() => {
      this.getUsers(pageNumber);
    });
  }

  getPage(pageNumber) {
    this.getUsers(pageNumber);
  }
}
