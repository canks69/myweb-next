import { getMDXComponent } from 'mdx-bundler/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
// import { HiLink, HiOutlineEye, HiPlay, HiUser } from 'react-icons/hi';
import { HiUser } from 'react-icons/hi';

import { getFileBySlug, getFiles } from '@/lib/mdx';
import useScrollSpy from '@/hooks/useScrollspy';

import MDXComponents from '@/components/content/MDXComponents';
import TableOfContents, {
  HeadingScrollSpy,
} from '@/components/content/TableOfContents';
import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

import { ProjectType } from '@/types/frontmatters';
export default function SingleProjectPage({ code, frontmatter }: ProjectType) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  const activeSection = useScrollSpy();

  const [toc, setToc] = React.useState<HeadingScrollSpy>();
  const minLevel =
    toc?.reduce((min, item) => (item.level < min ? item.level : min), 10) ?? 0;

  React.useEffect(() => {
    const headings = document.querySelectorAll('.mdx h1, .mdx h2, .mdx h3');

    const headingArr: HeadingScrollSpy = [];
    headings.forEach((heading) => {
      const id = heading.id;
      const level = +heading.tagName.replace('H', '');
      const text = heading.textContent + '';

      headingArr.push({ id, level, text });
    });

    setToc(headingArr);
  }, [frontmatter.slug]);

  return (
    <Layout>
      <Seo
        templateTitle={frontmatter.title}
        description={frontmatter.description}
        date={new Date(frontmatter.publishedAt).toISOString()}
      />
      <main>
        <section className=' min-h-main mb-20'>
          <div className='layout'>
            <ArrowLink direction='left' className='mb-10 mt-2' href='/projects'>
              Back to Projek
            </ArrowLink>
            <NextImage
              useSkeleton
              className='w-100 h-100'
              src={frontmatter.banner}
              width='10000'
              height='10000'
              alt='Icon'
            />
            <h1 className='mt-4'>{frontmatter.title}</h1>
            <div className='mt-2 flex flex-wrap items-center justify-start gap-3 text-sm font-medium text-gray-600 dark:text-gray-300'></div>
            {frontmatter.category && (
              <p className='mt-2 flex items-center justify-start gap-2 text-sm text-gray-600 dark:text-gray-300'>
                <HiUser className='text-lg text-gray-800 dark:text-white' />{' '}
                {frontmatter.category}
              </p>
            )}
            <hr className='mt-4 dark:border-gray-600' />
            <section className='lg:grid lg:grid-cols-[auto,250px] lg:gap-8'>
              <article className='mdx projects prose dark:prose-invert mx-auto w-full transition-colors'>
                <Component
                  components={
                    {
                      ...MDXComponents,
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    } as any
                  }
                />
              </article>
              <aside className='py-4'>
                <div className='sticky top-36'>
                  <TableOfContents
                    toc={toc}
                    minLevel={minLevel}
                    activeSection={activeSection}
                  />
                </div>
              </aside>
            </section>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles('projects');

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const post = await getFileBySlug('projects', params?.slug as string);

  return {
    props: { ...post },
  };
};
