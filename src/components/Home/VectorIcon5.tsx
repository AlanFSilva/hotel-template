import { memo, SVGProps } from 'react';

const VectorIcon5 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 7' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0.25 0L7 6.75L13.75 0' stroke='#112211' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
const Memo = memo(VectorIcon5);
export { Memo as VectorIcon5 };
