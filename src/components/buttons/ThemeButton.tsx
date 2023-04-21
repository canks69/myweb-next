import clsx from 'clsx';
import { useTheme } from 'next-themes';
import * as React from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

type ThemeButtonProps = React.ComponentPropsWithoutRef<'button'>;

export default function ThemeButton({ className, ...rest }: ThemeButtonProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  return (
    <button
      className={clsx('m-1 my-0 px-2 text-lg outline-none', className)}
      {...rest}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {mounted ? <>{theme === 'light' ? <FiMoon /> : <FiSun />}</> : <FiSun />}
    </button>
  );
}
