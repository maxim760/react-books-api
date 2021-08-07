import { Categories, IStatus, SortBy } from "../../../types";
import { IFilterParams } from "../../../types/api";
import { IBook } from "../../../types/books";

export type IBooksState = {
  books: IBook[],
  statusInfo: IStatus,
  totalItems: number,
  startIndex: number,
  filterParams: IFilterParams
}
