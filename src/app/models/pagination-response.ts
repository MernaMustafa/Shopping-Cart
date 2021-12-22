export class PaginationResponse<T> {
  TotalCount: number;
  CurrentPage: number;
  TotalPages: number;
  List: T[];

  // constructor(
  //   private list: T[],
  //   private pageNumber: number,
  //   private totalPages: number,
  //   private totalCount: number
  // ) {
  //   this.List = this.list;
  //   this.TotalCount = this.totalCount;
  //   this.CurrentPage = this.pageNumber;
  //   this.TotalPages = this.totalPages;
  // }
  get HasPreviousPage(): boolean {
    return this.CurrentPage > 1;
  }

  get HasNextPage(): boolean {
    return this.CurrentPage < this.TotalPages;
  }
}
