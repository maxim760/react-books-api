import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './bookPage.module.scss';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export const BookPage: React.FC = () => {
  const [isSkeleton, setIsSkeleton] = useState(false);
  if (isSkeleton) {
    return (
      <SkeletonTheme highlightColor="#dddddd" color="#d2d2d2">
        <div className={styles.page}>
          <div className={clsx(styles.wrapper, styles.book)}>
            <Skeleton className={styles.bookPhoto} height={350} width={250} />
          </div>
          <div className={clsx(styles.description, styles.wrapper)}>
            <Skeleton
              height={60}
              width={'30vw'}
              count={4}
              className={styles.skeletonLines}
            />
          </div>
        </div>
      </SkeletonTheme>
    );
  }
  return (
    <div className={styles.page}>
      <div className={clsx(styles.book, styles.wrapper)}>
        <img
          className={styles.bookPhoto}
          src="https://via.placeholder.com/275x400.png"
          alt="book"
        />
      </div>
      <div className={clsx(styles.description, styles.wrapper)}>
        <p className={styles.type}>Art / General</p>
        <p className={styles.name}>
          j s bach the goldberg variations on open score
        </p>
        <p className={styles.author}>kendall durelle briggs</p>
        <div className={styles.info}>
          an open score edition of afdgfdgfs dgde ghegheg
        </div>
      </div>
    </div>
  );
};
