import { memo, SVGProps } from 'react';

const Navigation1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 25 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_107_905)'>
      <path d='M1.96388 2.21853L12.2496 12.5042L22.5353 2.21853' stroke='#DB8300' strokeWidth={3} />
    </g>
    <defs>
      <clipPath id='clip0_107_905'>
        <rect
          width={15.0509}
          height={24.0318}
          fill='white'
          transform='matrix(-0.00212407 0.999998 0.999998 0.00212407 0.456179 0.167556)'
        />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(Navigation1Icon);
export { Memo as Navigation1Icon };
