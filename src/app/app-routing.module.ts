import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminGuard } from "./guards/admin.guard";
import { AuthGuard } from "./guards/auth.guard";
import { AddEditItemComponent } from "./views/admin/items/add-edit-item/add-edit-item.component";
import { ItemsListComponent } from "./views/admin/items/items-list/items-list.component";
import { ItemsList2Component } from "./views/admin/items/items-list2/items-list2.component";
import { AddEditUserComponent } from "./views/admin/users/add-edit-user/add-edit-user.component";
import { UsersListComponent } from "./views/admin/users/users-list/users-list.component";
import { AddCartItemComponent } from "./views/customer/add-cart-item/add-cart-item.component";
import { CartComponent } from "./views/customer/cart/cart.component";
import { HomeComponent } from "./views/home/home.component";
import { LoginComponent } from "./views/login/login.component";
import { RegisterComponent } from "./views/register/register.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {
    path: "cart/add",
    component: AddCartItemComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "cart/:id",
    component: CartComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "item/add",
    component: AddEditItemComponent,
    canActivate: [AuthGuard, AdminGuard],
  },
  {
    path: "item/edit/:id",
    component: AddEditItemComponent,
    canActivate: [AuthGuard, AdminGuard],
  },
  {
    path: "item",
    //component: ItemsListComponent,
    component: ItemsList2Component, //primeNG
    canActivate: [AuthGuard, AdminGuard],
  },
  {
    path: "user/edit/:id",
    component: AddEditUserComponent,
    canActivate: [AuthGuard, AdminGuard],
  },
  {
    path: "user/add",
    component: AddEditUserComponent,
    canActivate: [AuthGuard, AdminGuard],
  },
  {
    path: "user",
    component: UsersListComponent,
    canActivate: [AuthGuard, AdminGuard],
  },
  { path: "", redirectTo: "home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
