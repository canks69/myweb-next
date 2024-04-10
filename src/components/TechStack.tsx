import clsx from 'clsx';
import * as React from 'react';
import { IoLogoLaravel } from 'react-icons/io5';
import {
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiGoland, SiNestjs,
} from 'react-icons/si';
import {
  FaPhp,
  FaPython,
  FaDocker, FaHtml5,
} from "react-icons/fa";

import TooltipIcons from '@/components/TooltipIcon';

export default function TechStack() {
  return (
    <div className='flex flex-wrap justify-center gap-4'>
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
  }, {
    id: 'nestjs',
    icon: SiNestjs,
  },
  {
    id: 'react',
    icon: SiReact,
  },
  {
    id: 'typescript',
    icon: SiTypescript,
  }, {
    id: 'Html5',
    icon: FaHtml5 ,
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
  {
    id: 'php',
    icon: FaPhp,
  },
  {
    id: 'python',
    icon: FaPython,
  },{
    id: 'goland ',
    icon: SiGoland ,
  },{
    id: 'docker',
    icon: FaDocker,
  },
];
