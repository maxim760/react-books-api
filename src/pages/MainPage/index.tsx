import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './mainPage.module.scss';
import Skeleton from 'react-loading-skeleton';

export const MainPage: React.FC = () => {
  const [isSkeleton, setIsSkeleton] = useState(false);
  const toggleMode = () => setIsSkeleton((prev) => !prev);
  return (
    <div className={styles.page}>
      <p className={styles.countBooks}>Found 446 results</p>
      {!isSkeleton ? (
        <>
          <div className={styles.booksWrapper}>
            {Array(30)
              .fill('')
              .map((_, i) => (
                <a key={i} href="/">
                  <div className={styles.book}>
                    <img
                      className={styles.bookImage}
                      src="https://via.placeholder.com/115x180.png"
                      alt="book information"
                    />
                    <p className={styles.bookType}>Computers</p>
                    <p className={styles.bookName}>
                      node js путеводитель по технологии
                    </p>
                    <p className={styles.bookAuthor}>Кирилл Сухов</p>
                  </div>
                </a>
              ))}
          </div>
          <button className={clsx(styles.button, styles.buttonMore)}>
            Показать еще
          </button>
        </>
      ) : (
        <div className={styles.skeletonWrapper}>
          <Skeleton
            width={250}
            height={330}
            className={styles.book}
            count={10}
          />
        </div>
      )}
    </div>
  );
};
