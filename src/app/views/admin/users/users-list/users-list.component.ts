import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user";
import { UserService } from "src/app/services/admin/user.service";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.css"],
})
export class UsersListComponent implements OnInit {
  constructor(private itemService: UserService) {}
  title: string;
  users: User[];
  ngOnInit() {
    this.title = "Manage Users";
    this.getUsers();
  }

  getUsers() {
    this.itemService.getUsers().subscribe((data) => (this.users = data));
  }

  deleteUser(evt, id) {
    evt.preventDefault();
    this.itemService.deleteUser(id).subscribe(() => {
      this.getUsers();
    });
  }
}
