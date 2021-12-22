import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { PaginationResponse } from "src/app/models/pagination-response";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.css"],
})
export class PaginationComponent implements OnInit {
  @Input() data: PaginationResponse<any>;
  @Input() hasPrev: boolean;
  @Input() hasNext: boolean;
  @Output() onPageChange: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  getPage(pageNumber: number) {
    this.onPageChange.emit(pageNumber);
  }
}
