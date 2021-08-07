import React from 'react';
import { formatArray } from '../../../../../utils/formatArray';
import styles from './book.module.scss';
interface BookItemProps {
  image: string;
  category?: string;
  name: string;
  authors?: string[];
}

export const BookItem: React.FC<BookItemProps> = ({
  image,
  category,
  name,
  authors,
}) => {
  const formatAuthors = formatArray(authors, 'Authors are unknown');
  return (
    <div className={styles.book}>
      <img className={styles.image} src={image} alt={name} />
      <p className={styles.type} title={category}>
        {category || "No category"}
      </p>
      <p className={styles.name} title={name}>
        {name}
      </p>
      <p className={styles.author} title={formatAuthors}>
        {formatAuthors}
      </p>
    </div>
  );
};
