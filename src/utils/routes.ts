import { BookPage } from "../pages/BookPage";
import { MainPage } from "../pages/MainPage";

export enum ROUTE_NAMES {
  HOME = "/",
  BOOK = "/book"
}

export const routes = [
  {path: ROUTE_NAMES.HOME, component: MainPage},
  {path: ROUTE_NAMES.BOOK + "/:id", component: BookPage},
]