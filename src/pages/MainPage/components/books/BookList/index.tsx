import React from 'react';
import { Link } from 'react-router-dom';
import { IBook } from '../../../../../types/books';
import { ROUTE_NAMES } from '../../../../../utils/routes';
import { BookItem } from '../BookItem';

interface BookListProps {
  className: string;
  items: IBook[];
}

export const BookList: React.FC<BookListProps> = ({
  className = '',
  items = [],
}) => {
  return (
    <div className={className}>
      {items.map((book) => {
        const { authors, title, categories, imageLinks: { thumbnail } = {} } = book.volumeInfo
        
        return (
          <Link key={book.etag} to={`${ROUTE_NAMES.BOOK}/${book.id}`}>
            <BookItem
              name={title}
              image={thumbnail || ""}
              category={categories?.[0]}
              authors={authors}
            />
          </Link>
        )
      })}
    </div>
  );
};
