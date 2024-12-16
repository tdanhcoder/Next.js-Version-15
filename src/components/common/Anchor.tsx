import { AnchorHTMLAttributes } from 'react';

export interface IAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export function Anchor(props: IAnchorProps) {
  const { href, children, ...propsAnchor } = props;
  return (
    <a href={href} target='_blank' rel='noopener noreferrer' {...propsAnchor}>
      {children}
    </a>
  );
}
