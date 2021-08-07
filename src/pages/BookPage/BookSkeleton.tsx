import clsx from 'clsx';
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import styles from './bookPage.module.scss';

export const BookSkeleton: React.FC = () => {
  return (
    <SkeletonTheme highlightColor="#dddddd" color="#d2d2d2">
      <div className={styles.page}>
        <div className={clsx(styles.wrapper, styles.book)}>
          <Skeleton
            className={styles.bookPhoto}
            height={350}
            width={250}
          />
        </div>
        <div className={clsx(styles.description, styles.wrapper)}>
          <Skeleton
            height={60}
            width='30vw'
            count={4}
            className={styles.skeletonLines}
          />
        </div>
      </div>
    </SkeletonTheme>
  );
};
