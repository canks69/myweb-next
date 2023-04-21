import clsx from 'clsx';
import * as React from 'react';
import { IoLogoLaravel } from 'react-icons/io5';
import {
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

import TooltipIcons from '@/components/TooltipIcon';

export default function TechStack() {
  return (
    <div className='flex space-x-2 md:space-x-4'>
      {stacks.map((tech) => (
        <TooltipIcons key={tech.id}>
          <tech.icon
            key={tech.id}
            className={clsx(
              'h-8 w-8 md:h-10 md:w-10',
              'hover:text-primary-300 dark:hover:text-primary-300 text-gray-600 dark:text-gray-200',
              'transition-colors'
            )}
          />
        </TooltipIcons>
      ))}
    </div>
  );
}

const stacks = [
  {
    id: 'nextjs',
    icon: SiNextdotjs,
  },
  {
    id: 'react',
    icon: SiReact,
  },
  {
    id: 'typescript',
    icon: SiTypescript,
  },
  {
    id: 'tailwind',
    icon: SiTailwindcss,
  },
  {
    id: 'laravel',
    icon: IoLogoLaravel,
  },
  {
    id: 'node',
    icon: SiNodedotjs,
  },
];
