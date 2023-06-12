import { memo, SVGProps } from 'react';

const IcRoundRestaurantIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M16 6V12C16 13.1 16.9 14 18 14H19V21C19 21.55 19.45 22 20 22C20.55 22 21 21.55 21 21V3.13C21 2.48 20.39 2 19.76 2.15C17.6 2.68 16 4.51 16 6ZM11 9H9V3C9 2.45 8.55 2 8 2C7.45 2 7 2.45 7 3V9H5V3C5 2.45 4.55 2 4 2C3.45 2 3 2.45 3 3V9C3 11.21 4.79 13 7 13V21C7 21.55 7.45 22 8 22C8.55 22 9 21.55 9 21V13C11.21 13 13 11.21 13 9V3C13 2.45 12.55 2 12 2C11.45 2 11 2.45 11 3V9Z'
      fill='#112211'
    />
  </svg>
);
const Memo = memo(IcRoundRestaurantIcon);
export { Memo as IcRoundRestaurantIcon };