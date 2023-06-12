import { memo, SVGProps } from 'react';

const Rectangle16Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1440 100' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H1440V100H0V0Z' fill='#05122B' fillOpacity={0.55} />
  </svg>
);
const Memo = memo(Rectangle16Icon);
export { Memo as Rectangle16Icon };
