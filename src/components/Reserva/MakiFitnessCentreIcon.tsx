import { memo, SVGProps } from 'react';

const MakiFitnessCentreIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M23.2 11.2V12.8H21.6V16H20V17.6H17.6V12.8H6.4V17.6H4V16H2.4V12.8H0.8V11.2H2.4V8H4V6.4H6.4V11.2H17.6V6.4H20V8H21.6V11.2H23.2Z'
      fill='#112211'
    />
  </svg>
);
const Memo = memo(MakiFitnessCentreIcon);
export { Memo as MakiFitnessCentreIcon };
