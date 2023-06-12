import { memo, SVGProps } from 'react';

const Ellipse1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 35 34' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={17.5} cy={17} rx={17.5} ry={17} fill='white' />
  </svg>
);
const Memo = memo(Ellipse1Icon);
export { Memo as Ellipse1Icon };
