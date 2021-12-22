export class PaginationRequest {
  PageIndex: number;
  PageSize: number;

  constructor(private pageIndex: number, private pageSize: number) {
    this.PageIndex = this.pageIndex;
    this.PageSize = this.pageSize;
  }
}
