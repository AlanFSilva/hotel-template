import { memo, SVGProps } from 'react';

const VectorIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 4 4' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M2.0127 3.94116C2.84112 3.94116 3.5127 3.26959 3.5127 2.44116C3.5127 1.61273 2.84112 0.941162 2.0127 0.941162C1.18427 0.941162 0.512695 1.61273 0.512695 2.44116C0.512695 3.26959 1.18427 3.94116 2.0127 3.94116Z'
      fill='black'
    />
  </svg>
);
const Memo = memo(VectorIcon4);
export { Memo as VectorIcon4 };
