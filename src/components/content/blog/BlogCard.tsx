import clsx from 'clsx';
import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

import { BlogFrontmatter } from '@/types/frontmatters';

type ProjectCardProps = {
  blog: BlogFrontmatter;
} & React.ComponentPropsWithoutRef<'li'>;

export default function BlogCard({ blog, className }: ProjectCardProps) {
  const maxDescriptionLength = 500;
  const truncatedDescription =
    blog.description.length > maxDescriptionLength
      ? blog.description.substring(0, maxDescriptionLength) + '...'
      : blog.description;
  
  return (
    <li
      className={clsx(
        'project-card rounded-md md:w-full',
        'border dark:border-gray-600',
        'scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu',
        'transition duration-100',
        'motion-reduce:hover:scale-100',
        'animate-shadow',
        className
      )}
    >
      <UnstyledLink
        href={`/projects/${blog.slug}`}
        className='focus-visible:ring-primary-300 flex h-full flex-col items-start rounded-md p-4 focus:outline-none focus-visible:ring'
      >
        <div className="flex flex-row items-start">
          <div className="w-1/3 mr-4">
            <img
              src={blog.banner}
              alt='Icon'
              className='w-full h-auto rounded-md'
            />
          </div>
          <div className="w-2/3">
            <h4>{blog.title}</h4>
            <p className='mb-auto text-sm text-gray-700 dark:text-gray-300'>
              {truncatedDescription}
            </p>
            <p className='animated-underline mt-2 inline-block font-medium'>
              See more →
            </p>
          </div>
        </div>
      </UnstyledLink>
    </li>
  );
}
