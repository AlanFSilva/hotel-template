import { memo, SVGProps } from 'react';

const Vector1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 5' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0.5 0.5L5 5L9.5 0.5' stroke='#F8FBFF' />
  </svg>
);
const Memo = memo(Vector1Icon);
export { Memo as Vector1Icon };
