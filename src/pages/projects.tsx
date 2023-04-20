import clsx from 'clsx';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Tooltip from '@/components/Tooltip';

export default function Projects() {
  return (
    <Layout>
      <Seo templateTitle='Projects' />
      <main>
        <section className={clsx('min-h-main fade-in-start')}>
          <div className='layout py-12'>
            <Tooltip>Projects</Tooltip>
          </div>
        </section>
      </main>
    </Layout>
  );
}
