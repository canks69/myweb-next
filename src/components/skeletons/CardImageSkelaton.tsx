import clsx from 'clsx';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import * as React from "react";

type cardSkeltonProps = {
  count : number
}

export default function CardImageSkeleton({ count } : cardSkeltonProps){
  const skeletons = [];
  for (let i = 0; i < count; i++) {
    skeletons.push(
      <li key={`title_${i}`}  className={clsx(
        'mt-5 project-card rounded-md md:w-full',
        'border dark:border-gray-600',
        'scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu',
        'transition duration-100',
        'motion-reduce:hover:scale-100',
        'animate-shadow p-5',
      )}>
        <Skeleton count={1} height={20} />
        <Skeleton count={1} width={150} />
        <Skeleton count={1} width={200} />
        <Skeleton height={200} />
        <Skeleton count={1} width={100} height={20} className='mt-2' />
      </li>
    );
  }

  return (
    <>
      {skeletons}
    </>
  )
}