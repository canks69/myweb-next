import * as React from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';

export default function Footer() {
  return (
    <div className='layout relative flex flex-col items-center justify-center py-0 text-center'>
      <footer className='absolute bottom-2 text-gray-600 dark:text-gray-300'>
        © {new Date().getFullYear()} By{' '}
        <UnderlineLink href='https://canks.dev'>Canks</UnderlineLink>
      </footer>
    </div>
  );
}
