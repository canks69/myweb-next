import * as React from 'react';

import clsxm from '@/lib/clsxm';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink';

const PrimaryLinkVariant = ['primary', 'basic'] as const;
type PrimaryLinkProps = {
  variant?: (typeof PrimaryLinkVariant)[number];
} & UnstyledLinkProps;

const PrimaryLink = React.forwardRef<HTMLAnchorElement, PrimaryLinkProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={clsxm(
          'hover:text-transparent',
          'from-sky-500 via-50% to-emerald-500 to-90% hover:bg-gradient-to-r',
          'hover:bg-clip-text',
          className
        )}
      >
        {children}
      </UnstyledLink>
    );
  }
);

export default PrimaryLink;
