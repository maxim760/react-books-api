import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './bookPage.module.scss';
import { IBook } from '../../types/books';
import { STATUS } from '../../types';
import { apiBooks } from '../../services/apiBooks';
import { useHistory, useParams } from 'react-router-dom';
import { useStatus } from '../../hooks/useStatus';
import { BookSkeleton } from './BookSkeleton';
import { formatArray } from '../../utils/formatArray';
import { Button } from '../../components/Button';
import { ROUTE_NAMES } from '../../utils/routes';

export const BookPage: React.FC = () => {
  const history = useHistory();
  const { id: bookId } = useParams<{ id: string }>();
  const [data, setData] = useState<null | IBook>(null);
  const { status, message, setStatus } = useStatus();
  const goToMain = () => history.push(ROUTE_NAMES.HOME);
  useEffect(() => {
    (async () => {
      setStatus(STATUS.LOADING);
      try {
        const data = await apiBooks.getById(bookId);
        setData(data);
        setStatus(STATUS.SUCCESS);
      } catch (error) {
        setStatus(STATUS.ERROR, error.message);
      }
    })();
  }, []);
  if (status.isError) {
    return <h1>Ошибка: {message}</h1>;
  }
  if (status.isLoading || status.isNever) {
    return <BookSkeleton />;
  }
  if (!data) {
    return <h1>Нет книги</h1>;
  }
  const { authors, description, imageLinks, categories, title, infoLink } =
    data.volumeInfo;
  return (
    <div className={styles.page}>
      <div className={clsx(styles.book, styles.wrapper)}>
        <img
          className={styles.bookPhoto}
          src={imageLinks?.thumbnail}
          alt={title}
        />
        <a className={styles.link} href={infoLink} target="_blank">
          go to the site
        </a>
      </div>
      <div className={clsx(styles.description, styles.wrapper)}>
        <Button className={styles.button} onClick={goToMain}>go to main page</Button>
        <p className={styles.type}>
          {formatArray(categories, 'No categories')}
        </p>
        <p className={styles.name}>{title}</p>
        <p className={styles.author}>
          {formatArray(authors, 'Authors are unknown')}
        </p>
        <div
          className={styles.info}
          dangerouslySetInnerHTML={{
            __html: description || 'No description'
          }}
        />
      </div>
    </div>
  );
};
