import clsx from 'clsx';
import { InferGetStaticPropsType } from 'next';
import * as React from 'react';

import { getAllFilesFrontmatter } from '@/lib/mdx';
import useLoaded from '@/hooks/useLoaded';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Tooltip from '@/components/Tooltip';
import BlogCard from "@/components/content/blog/BlogCard";
import CardBlogSkeleton from "@/components/skeletons/CardBlogSkelaton";

export default function Blog({
   blogs,
 }: InferGetStaticPropsType<typeof getStaticProps>) {
  const isLoaded = useLoaded();
  return (
    <Layout>
      <Seo
        templateTitle='Blog'
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
            <Tooltip>Blog</Tooltip>
              <ul
                data-fade='2'
                className='mt-6 flex flex-wrap gap-4 items-start'
              >
              {isLoaded ? (
                blogs.map((blog) => (
                  <BlogCard key={blog.slug} blog={blog} />
                ))
              ) : (
                <CardBlogSkeleton count={3} />
              )}
              </ul>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const blogs = await getAllFilesFrontmatter('blog');
  return { props: { blogs } };
}
