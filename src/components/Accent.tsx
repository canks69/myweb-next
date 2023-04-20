import clsx from 'clsx';
import * as React from 'react';

type AccentType = React.ComponentPropsWithoutRef<'span'>;

export default function Accent({ children, className }: AccentType) {
  return (
    <span
      className={clsx(
        className,
        'dark:font-extrabold dark:text-transparent',
        'bg-gradient-to-r from-sky-500 via-50% to-emerald-500 to-90%',
        'dark:from-sky-500 dark:via-50% dark:to-emerald-500 dark:to-90% dark:bg-clip-text'
      )}
    >
      {children}
    </span>
  );
}
