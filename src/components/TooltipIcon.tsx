import clsx from 'clsx';
import * as React from 'react';

import Accent from '@/components/Accent';

type AccentType = React.ComponentPropsWithoutRef<'span'>;

export default function TooltipIcons({ children, className }: AccentType) {
  return (
    <>
      <h1 className='text-3xl md:text-5xl'>
        <Accent className={clsx(className, 'hover:text-emerald-500')}>
          {children}
        </Accent>
      </h1>
    </>
  );
}
