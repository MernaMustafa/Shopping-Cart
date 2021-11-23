import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ApiService } from "./services/api.service";
import { ItemService } from "./services/admin/item.service";
import { UserService } from "./services/admin/user.service";
import { CartService } from "./services/customer/cart.service";
import { AuthService } from "./services/auth.service";
import { LoginComponent } from "./views/login/login.component";
import { HomeComponent } from "./views/home/home.component";
import { RegisterComponent } from "./views/register/register.component";
import { CartComponent } from "./views/customer/cart/cart.component";
import { AddCartItemComponent } from "./views/customer/add-cart-item/add-cart-item.component";
import { UsersListComponent } from "./views/admin/users/users-list/users-list.component";
import { AddEditUserComponent } from "./views/admin/users/add-edit-user/add-edit-user.component";
import { ItemsListComponent } from "./views/admin/items/items-list/items-list.component";
import { AddEditItemComponent } from "./views/admin/items/add-edit-item/add-edit-item.component";
import { NavbarComponent } from "./views/navbar/navbar.component";
import { FooterComponent } from "./views/footer/footer.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { JwtModule } from "@auth0/angular-jwt";
import { CartItemService } from "./services/customer/cart-item.service";
import { SearchPipe } from "./pipes/search.pipe";
import { SearchComponent } from "./views/customer/search/search.component";
import { HighlightDirective } from "./directives/highlight.directive";
import { FilterByPricePipe } from "./pipes/filter-by-price.pipe";
import { FilterByPriceComponent } from "./views/customer/filter-by-price/filter-by-price.component";

export function tokenGetter() {
  return sessionStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    AddCartItemComponent,
    UsersListComponent,
    AddEditUserComponent,
    ItemsListComponent,
    AddEditItemComponent,
    FooterComponent,
    SearchPipe,
    SearchComponent,
    HighlightDirective,
    FilterByPricePipe,
    FilterByPriceComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:44346"],
        blacklistedRoutes: [],
      },
    }),
  ],
  providers: [
    ApiService,
    ItemService,
    UserService,
    CartService,
    CartItemService,
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
