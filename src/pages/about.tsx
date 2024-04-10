import clsx from 'clsx';
import * as React from 'react';

import useLoaded from '@/hooks/useLoaded';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import TechStack from '@/components/TechStack';
import Tooltip from '@/components/Tooltip';

export default function About() {
  const isLoaded = useLoaded();
  return (
    <Layout>
      <Seo
        templateTitle='About'
        description='I am a software developer working at PT. AZ Solusindo Technology'
      />
      <main>
        <section className={clsx('min-h-main', isLoaded && 'fade-in-start')}>
          <div className='layout py-12'>
            <Tooltip>About</Tooltip>
            <p data-fade='1' className='mt-2 text-gray-600 dark:text-gray-300'>
              A little about myself
            </p>
            <div className='mt-4' data-fade='2'>
              <article className='prose dark:prose-invert'>
                <p className='mt-5' data-fade='3'>
                  Hello! I'm Canks. I started learning web development in May
                  2020 which was the start of the pandemic. I didn't have much
                  to do so I decided to do some web learning on my own with lots
                  of watching Youtube video.
                </p>
                <p className='mt-5' data-fade='4'>
                  There are a lot of things and technologies to learn in
                  frontend development and I am motivated to learn as much as I
                  can. I enjoy learning something new and getting feedback to
                  make myself better and grow.
                </p>
                <p className='mt-5' data-fade='5'>
                  On this website I will write several blogs and showcase my
                  projects. I believe that writing down what I've learned is the
                  best way to remember something, and I can share my knowledge
                  along the way. That's it and Thank you!
                </p>
              </article>
              <h3 className='mt-12 justify-center text-center' data-fade='6'>Current Favorite Tech Stack</h3>
              <figure className='mt-2'>
                <TechStack />
              </figure>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
