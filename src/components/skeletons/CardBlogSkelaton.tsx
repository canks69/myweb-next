import clsx from 'clsx';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import * as React from 'react';

type cardSkeltonProps = {
  count: number;
};

export default function CardBlogSkeleton({ count }: cardSkeltonProps) {
  const skeletons = [];
  for (let i = 0; i < count; i++) {
    skeletons.push(
      <li
        key={`title_${i}`}
        className={clsx(
          'project-card rounded-md p-4 md:w-full',
          'border dark:border-gray-800',
          'scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu',
          'transition duration-100',
          'motion-reduce:hover:scale-100',
          'animate-shadow'
        )}
      >
        <div className='flex flex-row items-start'>
          <div className='mr-4 w-1/3'>
            <Skeleton height={150} />
          </div>
          <div className='w-2/3'>
            <Skeleton
                count={1}
                height={20}
                width='60%'
            />
            <Skeleton count={1} width='80%' />
            <Skeleton count={1} width='90%' />
            <Skeleton count={1} width='100%' />
            <Skeleton count={1} width='80%' />
            <Skeleton count={1} width='60%' />
          </div>
        </div>
      </li>
    );
  }

  return <>{skeletons}</>;
}
