import clsx from 'clsx';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Tooltip from '@/components/Tooltip';

export default function Projects() {
  return (
    <Layout>
      <Seo
        templateTitle='Projects'
        description="Showcase of my projects on front-end development that I'm proud of."
      />
      <main>
        <section className={clsx('min-h-main fade-in-start')}>
          <div className='layout py-12'>
            <Tooltip>Projects</Tooltip>
            <ul
              data-fade='2'
              className='mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3'
            >
              <li className='project-card animate-shadow scale-100 rounded-md border transition duration-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu motion-reduce:hover:scale-100 dark:border-gray-600 md:w-full'>
                <a className='focus-visible:ring-primary-300 flex h-full flex-col items-start rounded-md p-4 focus:outline-none focus-visible:ring'>
                  <h4>Projek Name</h4>
                  <p className='mb-auto text-sm text-gray-700 dark:text-gray-300'>
                    Projek Description
                  </p>
                  {/* <Skeleton className='w-200 h-72' /> */}
                  <NextImage
                    useSkeleton
                    className='w-100 h-100'
                    src='/images/hexcape-banner_xdulxw.webp'
                    width='400'
                    height='400'
                    alt='Icon'
                  />
                  <p className='animated-underline mt-2 inline-block font-medium'>
                    See more →
                  </p>
                </a>
              </li>
              <li className='project-card animate-shadow scale-100 rounded-md border transition duration-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu motion-reduce:hover:scale-100 dark:border-gray-600 md:w-full'>
                <a className='focus-visible:ring-primary-300 flex h-full flex-col items-start rounded-md p-4 focus:outline-none focus-visible:ring'>
                  <h4>Projek Name</h4>
                  <p className='mb-auto text-sm text-gray-700 dark:text-gray-300'>
                    A website to facilitate students from Sumatera Selatan to
                    register to local high school.
                  </p>
                  {/* <Skeleton className='w-200 h-72' /> */}
                  <NextImage
                    useSkeleton
                    className='w-100 h-100'
                    src='/images/hexcape-banner_xdulxw.webp'
                    width='400'
                    height='400'
                    alt='Icon'
                  />
                  <p className='animated-underline mt-2 inline-block font-medium'>
                    See more →
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </Layout>
  );
}
