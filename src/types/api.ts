import { SortBy, Categories } from '.';
export type IFilterParams = {
  query: string;
  sortBy: SortBy;
  category: Categories;
};
export type IGetBooksParams = {
  count: number;
  startIndex: number;
  filterParams: IFilterParams;
};
