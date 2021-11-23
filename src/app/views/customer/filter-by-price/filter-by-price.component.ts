import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-filter-by-price",
  templateUrl: "./filter-by-price.component.html",
  styleUrls: ["./filter-by-price.component.css"],
})
export class FilterByPriceComponent implements OnInit {
  options = ["All prices", "Under 500", "Above 500"];
  selected: string = "All prices";
  constructor() {}

  ngOnInit() {}
}
