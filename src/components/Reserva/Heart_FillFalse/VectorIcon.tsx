import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M13.5436 0.75C10.5005 0.75 9.00048 3.75 9.00048 3.75C9.00048 3.75 7.50048 0.75 4.45735 0.75C1.98423 0.75 0.0257917 2.81906 0.00047924 5.28797C-0.0510833 10.4128 4.06595 14.0573 8.5786 17.1202C8.70301 17.2048 8.85001 17.2501 9.00048 17.2501C9.15095 17.2501 9.29794 17.2048 9.42235 17.1202C13.9345 14.0573 18.0516 10.4128 18.0005 5.28797C17.9752 2.81906 16.0167 0.75 13.5436 0.75V0.75Z'
      stroke='black'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
