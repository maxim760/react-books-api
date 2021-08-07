import { $host } from '.';
import { Categories } from '../types';
import { IGetBooksParams } from '../types/api';
import { IBook, IBooksData } from '../types/books';

export const apiBooks = {
  async getAll({
    count,
    startIndex,
    filterParams: {query, category, sortBy}
  }: IGetBooksParams): Promise<IBooksData> {
    try {
      let q = `intitle:${query}`
      if (category && category !== Categories.all) {
        q += `;subject:${category}`
      }
      const { data } = await $host.get<IBooksData>('', {
        params: {
          maxResults: count,
          q,
          startIndex,
          orderBy:sortBy,
        },
      });
      if (!data.items) {
        data.items = [];
      }
      return data;
    } catch (e) {
      throw new Error('Failed to get books');
    }
  },
  async getById(id: string): Promise<IBook> {
    try {
      const { data } = await $host.get<IBook>(`/${id}`);
      return data;
    } catch (e) {
      throw new Error('The book is not found');
    }
  },
};
