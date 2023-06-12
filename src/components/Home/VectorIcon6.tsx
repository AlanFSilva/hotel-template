import { memo, SVGProps } from 'react';

const VectorIcon6 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M5 0.5V9.5ZM9.5 5H0.5Z' fill='#DB8300' />
    <path d='M5 0.5V9.5M9.5 5H0.5' stroke='#DB8300' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
const Memo = memo(VectorIcon6);
export { Memo as VectorIcon6 };
