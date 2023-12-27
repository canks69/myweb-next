import clsx from 'clsx';
import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';

import { ProjectFrontmatter } from '@/types/frontmatters';

type ProjectCardProps = {
  project: ProjectFrontmatter;
} & React.ComponentPropsWithoutRef<'li'>;

export default function ProjectCard({ project, className }: ProjectCardProps) {
  const maxDescriptionLength = 130;
  const truncatedDescription =
    project.description.length > maxDescriptionLength
      ? project.description.substring(0, maxDescriptionLength) + '...'
      : project.description;

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
              href={`/projects/${project.slug}`}
              className='focus-visible:ring-primary-300 flex h-full flex-col items-start rounded-md p-4 focus:outline-none focus-visible:ring'
          >
            <h4>{project.title}</h4>
            <p className='mb-auto text-sm text-gray-700 dark:text-gray-300'>
              {truncatedDescription}
            </p>
            <NextImage
                useSkeleton
                className='w-100 h-100'
                src={project.banner}
                width='400'
                height='400'
                alt='Icon'
            />

            <p className='animated-underline mt-2 inline-block font-medium'>
              See more →
            </p>
          </UnstyledLink>
      </li>
  );
}
