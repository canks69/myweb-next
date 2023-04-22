import clsx from 'clsx';
import { InferGetStaticPropsType } from 'next';
import * as React from 'react';

import { getAllFilesFrontmatter } from '@/lib/mdx';
import useLoaded from '@/hooks/useLoaded';

import ProjectCard from '@/components/content/projeks/ProjectCard';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Tooltip from '@/components/Tooltip';

export default function Projects({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const isLoaded = useLoaded();
  return (
    <Layout>
      <Seo
        templateTitle='Projects'
        description="Showcase of my projects on front-end development that I'm proud of."
      />
      <main>
        <section
          className={clsx(
            isLoaded && 'fade-in-start',
            'min-h-main fade-in-start'
          )}
        >
          <div className='layout py-12'>
            <Tooltip>Projects</Tooltip>
            <ul
              data-fade='2'
              className='mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3'
            >
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </ul>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = await getAllFilesFrontmatter('projects');

  return { props: { projects } };
}
