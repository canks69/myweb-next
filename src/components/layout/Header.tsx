import clsx from 'clsx';
import { useRouter } from 'next/router';
import * as React from 'react';

import ThemeButton from '@/components/buttons/ThemeButton';
import PrimaryLink from '@/components/links/PrimaryLink';

const links = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
];

export default function Header() {
  const router = useRouter();
  const arrOfRoute = router.route.split('/');
  const baseRoute = '/' + arrOfRoute[1];

  const [onTop, setOnTop] = React.useState<boolean>(true);
  React.useEffect(() => {
    const handleScroll = () => {
      setOnTop(window.pageYOffset === 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={clsx(
        'dark:bg-dark sticky top-0 z-50 bg-white',
        !onTop && 'shadow-sm'
      )}
    >
      <div className='layout flex h-20 items-center justify-between'>
        <p className='text-lg font-bold'>
          <PrimaryLink href='/'>Canks</PrimaryLink>
          <ThemeButton />
        </p>
        <nav>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <PrimaryLink
                  href={href}
                  className={clsx(
                    'text-lg font-semibold',
                    href === baseRoute &&
                      'bg-gradient-to-r from-sky-500 via-50% to-emerald-500 to-90% dark:bg-clip-text dark:text-transparent'
                  )}
                >
                  {label}
                </PrimaryLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
