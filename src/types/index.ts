import { ChangeEvent } from "react";

export type OnChange = (event: ChangeEvent<HTMLInputElement>) => void

export enum STATUS {
  NEVER = "NEVER",
  LOADING = "LOADING",
  ERROR = "ERROR",
  SUCCESS = "SUCCESS",
}

export type IStatus = {
  status: STATUS;
  message ?: string
}

export enum SortBy {
  newest = 'newest',
  relevance = 'relevance',
}
export enum Categories {
  all = 'all',
  art = 'art',
  biography = 'biography',
  computers = 'computers',
  history = 'history',
  medical = 'medical',
  poetry = 'poetry',
}